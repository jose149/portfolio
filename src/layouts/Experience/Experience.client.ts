const FILTER_EXIT_DURATION = 190;

const FILTER_ENTER_DURATION = 540;

const FILTER_STAGGER = 38;

const wait = (duration: number) =>
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, duration);
  });

const initExperience = (experience: HTMLElement) => {
  const filterContainer = experience.querySelector<HTMLElement>(
    "[data-experience-filters]",
  );

  const indicator = experience.querySelector<HTMLElement>(
    "[data-experience-indicator]",
  );

  const timeline = experience.querySelector<HTMLElement>(
    "[data-experience-list]",
  );

  const filterButtons = [
    ...experience.querySelectorAll<HTMLButtonElement>(
      "[data-experience-filter]",
    ),
  ];

  const items = [
    ...experience.querySelectorAll<HTMLElement>("[data-experience-item]"),
  ];

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const detailsLabel = experience.dataset.detailsLabel ?? "Details";

  const closeLabel = experience.dataset.closeLabel ?? "Close";

  let activeFilterIndex = 0;

  let indicatorAnimation: Animation | null = null;

  let transitionId = 0;

  // ==================================================
  // ACCORDION
  // ==================================================

  const setItemState = (item: HTMLElement, expanded: boolean) => {
    const toggle = item.querySelector<HTMLButtonElement>(
      "[data-experience-toggle]",
    );

    const panel = item.querySelector<HTMLElement>("[data-experience-panel]");

    const label = item.querySelector<HTMLElement>(
      "[data-experience-toggle-label]",
    );

    const icon = item.querySelector<HTMLElement>(
      ".experience-item__toggle-icon",
    );

    item.classList.toggle("experience-item--expanded", expanded);

    toggle?.setAttribute("aria-expanded", String(expanded));

    panel?.setAttribute("aria-hidden", String(!expanded));

    if (panel) {
      panel.inert = !expanded;
    }

    if (label) {
      label.textContent = expanded ? closeLabel : detailsLabel;
    }

    if (icon) {
      icon.textContent = expanded ? "−" : "+";
    }
  };

  const closeItem = (item: HTMLElement) => {
    setItemState(item, false);
  };

  const openItem = (item: HTMLElement) => {
    setItemState(item, true);
  };

  const initializeAccordion = () => {
    items.forEach((item) => {
      const toggle = item.querySelector<HTMLButtonElement>(
        "[data-experience-toggle]",
      );

      if (!toggle) {
        return;
      }

      toggle.addEventListener("click", () => {
        const isExpanded = item.classList.contains("experience-item--expanded");

        items.forEach((otherItem) => {
          if (otherItem !== item) {
            closeItem(otherItem);
          }
        });

        if (isExpanded) {
          closeItem(item);

          return;
        }

        openItem(item);
      });
    });
  };

  // ==================================================
  // FILTER INDICATOR
  // ==================================================

  const setIndicatorPosition = (button: HTMLButtonElement) => {
    if (!indicator) {
      return;
    }

    const x = button.offsetLeft;

    const width = button.offsetWidth;

    indicator.style.width = `${width}px`;

    indicator.style.transform = `translate3d(${x}px, 0, 0)`;

    indicator.dataset.x = String(x);

    indicator.dataset.width = String(width);
  };

  const animateIndicator = (button: HTMLButtonElement, direction: number) => {
    if (!indicator) {
      return;
    }

    const toX = button.offsetLeft;

    const toWidth = button.offsetWidth;

    const fromX = Number(indicator.dataset.x ?? toX);

    const fromWidth = Number(indicator.dataset.width ?? toWidth);

    indicatorAnimation?.cancel();

    if (reducedMotion.matches) {
      setIndicatorPosition(button);

      return;
    }

    const distance = toX - fromX;

    const travel = Math.abs(distance);

    const stretch = Math.min(34, travel * 0.18);

    const middleWidth = Math.max(fromWidth, toWidth) + stretch;

    const middleX =
      fromX + distance * 0.58 - (direction < 0 ? stretch * 0.25 : 0);

    indicatorAnimation = indicator.animate(
      [
        {
          transform: `translate3d(${fromX}px, 0, 0) scaleY(1)`,

          width: `${fromWidth}px`,
        },

        {
          offset: 0.52,

          transform: `translate3d(${middleX}px, 0, 0) scaleY(0.82)`,

          width: `${middleWidth}px`,
        },

        {
          transform: `translate3d(${toX}px, 0, 0) scaleY(1)`,

          width: `${toWidth}px`,
        },
      ],
      {
        duration: 580,

        easing: "cubic-bezier(0.16, 1, 0.3, 1)",

        fill: "forwards",
      },
    );

    indicator.dataset.x = String(toX);

    indicator.dataset.width = String(toWidth);

    indicatorAnimation.finished
      .then(() => {
        indicator.style.width = `${toWidth}px`;

        indicator.style.transform = `translate3d(${toX}px, 0, 0)`;

        indicatorAnimation?.cancel();

        indicatorAnimation = null;
      })
      .catch(() => {
        // Animation interrupted.
      });
  };

  // ==================================================
  // VISIBILITY
  // ==================================================

  const applyVisibility = (filter: string | undefined) => {
    items.forEach((item) => {
      const category = item.dataset.category;

      item.hidden = filter !== "all" && category !== filter;
    });
  };

  // ==================================================
  // FILTER ANIMATION
  // ==================================================

  const clearFilterAnimation = () => {
    if (!timeline) {
      return;
    }

    timeline.classList.remove(
      "experience__timeline--leaving-left",
      "experience__timeline--leaving-right",
      "experience__timeline--pre-enter-left",
      "experience__timeline--pre-enter-right",
    );

    timeline.style.height = "";

    timeline.style.overflow = "";

    items.forEach((item) => {
      item.classList.remove("experience-item--filter-entering");

      item.style.removeProperty("--filter-delay");
    });
  };

  const filterTimeline = async (
    filter: string | undefined,

    direction: number,
  ) => {
    if (!timeline) {
      applyVisibility(filter);

      return;
    }

    const currentTransition = ++transitionId;

    clearFilterAnimation();

    if (reducedMotion.matches) {
      applyVisibility(filter);

      return;
    }

    const previousHeight = timeline.getBoundingClientRect().height;

    timeline.style.height = `${previousHeight}px`;

    timeline.style.overflow = "hidden";

    const leavingClass =
      direction > 0
        ? "experience__timeline--leaving-left"
        : "experience__timeline--leaving-right";

    timeline.classList.add(leavingClass);

    await wait(FILTER_EXIT_DURATION);

    if (currentTransition !== transitionId) {
      return;
    }

    applyVisibility(filter);

    timeline.classList.remove(leavingClass);

    timeline.style.height = "auto";

    const nextHeight = timeline.getBoundingClientRect().height;

    timeline.style.height = `${previousHeight}px`;

    const enterClass =
      direction > 0
        ? "experience__timeline--pre-enter-right"
        : "experience__timeline--pre-enter-left";

    timeline.classList.add(enterClass);

    const visibleItems = items.filter((item) => !item.hidden);

    visibleItems.forEach((item, index) => {
      item.classList.add("experience-item--filter-entering");

      item.style.setProperty("--filter-delay", `${index * FILTER_STAGGER}ms`);
    });

    void timeline.offsetHeight;

    requestAnimationFrame(() => {
      if (currentTransition !== transitionId) {
        return;
      }

      timeline.style.height = `${nextHeight}px`;

      timeline.classList.remove(enterClass);

      visibleItems.forEach((item) => {
        item.classList.remove("experience-item--filter-entering");
      });
    });

    const staggerDuration = Math.min(
      visibleItems.length * FILTER_STAGGER,

      180,
    );

    await wait(FILTER_ENTER_DURATION + staggerDuration);

    if (currentTransition !== transitionId) {
      return;
    }

    timeline.style.height = "auto";

    timeline.style.overflow = "";
  };

  // ==================================================
  // FILTER EVENTS
  // ==================================================

  const initializeFilters = () => {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.experienceFilterIndex);

        if (index === activeFilterIndex) {
          return;
        }

        const direction = index > activeFilterIndex ? 1 : -1;

        activeFilterIndex = index;

        filterButtons.forEach((otherButton, otherIndex) => {
          const active = otherIndex === index;

          otherButton.classList.toggle("experience__filter--active", active);

          otherButton.setAttribute("aria-pressed", String(active));
        });

        animateIndicator(button, direction);

        filterTimeline(
          button.dataset.experienceFilter,

          direction,
        );
      });
    });
  };

  // ==================================================
  // INITIAL INDICATOR
  // ==================================================

  const initializeIndicator = () => {
    const activeFilter = filterButtons.find((button) =>
      button.classList.contains("experience__filter--active"),
    );

    if (!activeFilter) {
      return;
    }

    requestAnimationFrame(() => {
      setIndicatorPosition(activeFilter);
    });

    document.fonts?.ready.then(() => {
      setIndicatorPosition(activeFilter);
    });

    if (!filterContainer) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      const active = filterButtons.find((button) =>
        button.classList.contains("experience__filter--active"),
      );

      if (active) {
        setIndicatorPosition(active);
      }
    });

    resizeObserver.observe(filterContainer);
  };

  // ==================================================
  // INITIALIZE
  // ==================================================

  initializeAccordion();
  initializeFilters();
  initializeIndicator();
};

document
  .querySelectorAll<HTMLElement>("[data-experience-root]")
  .forEach(initExperience);
