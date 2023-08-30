import ScrollSuave from "./module/scroll-suave.js";
import initAnimacaoScroll from "./module/scroll-animacao.js";
import initAccordion from "./module/accordion.js";
import initTabNav from "./module/tab-nav.js";
import initModal from "./module/modal.js";
import initDropdownMenu from "./module/dropdown-menu.js";
import initMenuMobile from "./module/menu-mobile.js";
import initFetchAnimais from "./module/fetch-animais.js";
import initFetchBitcoin from "./module/fecth-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()
initAnimacaoScroll()
initAccordion()
initTabNav()
initModal()
initDropdownMenu()
initMenuMobile()
initFetchAnimais()
initFetchBitcoin()