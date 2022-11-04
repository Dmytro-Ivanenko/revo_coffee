const refs = {
	cancelBtn: document.querySelector(".hero-header__cancel-button"),
	burgerBtn: document.querySelector(".hero-header__burger-button"),
	navLink: document.querySelectorAll(".page-nav__link--hidden"),
	heroMenu: document.querySelector(".hero-header__menu"),
};

const burgerHandler = e => {
	refs.cancelBtn.addEventListener("click", cancelHandler);
	refs.burgerBtn.removeEventListener("click", burgerHandler);

	refs.navLink.forEach(elem => {
		elem.classList.remove("page-nav__link--hidden");
	});

	refs.heroMenu.classList.add("hero-header__menu--open");

	refs.burgerBtn.classList.add("hiddenBtn");
	refs.cancelBtn.classList.remove("hiddenBtn");
};

const cancelHandler = e => {
	refs.cancelBtn.removeEventListener("click", cancelHandler);
	refs.burgerBtn.addEventListener("click", burgerHandler);

	refs.navLink.forEach(elem => {
		elem.classList.add("page-nav__link--hidden");
	});

	refs.heroMenu.classList.remove("hero-header__menu--open");

	refs.burgerBtn.classList.remove("hiddenBtn");
	refs.cancelBtn.classList.add("hiddenBtn");
};

refs.burgerBtn.addEventListener("click", burgerHandler);
