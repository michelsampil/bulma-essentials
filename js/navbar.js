import { initNavbar } from "./navbar.js";
import { initHero } from "./hero.js";
import { initCards } from "./cards.js";
import { initForm } from "./form.js";
import { initTable } from "./table.js";
import { initMediaObjects } from "./media.js";
import { initModals } from "./modals.js";
import { initDropdowns } from "./dropdown.js";
import { initTabs } from "./tabs.js";
import { initPagination } from "./pagination.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initHero();
  initCards();
  initForm();
  initTable();
  initMediaObjects();
  initModals();
  initDropdowns();
  initTabs();
  initPagination();
});
