'use strict';

import homeSection from '../Home/home.hbs';
import header from '../Header/header.hbs';
import aboutSection from '../About/about.hbs';
import casesSection from '../Cases/cases.hbs';
import blogSection from '../Blog/blog.hbs';
import teamSection from '../Team/team.hbs';
// import contactSection from '../Contact/contact.hbs';
import footerSection from '../Footer/footer.hbs';
import errorWorning from '../Error/error.hbs';

import './importImages';

export default function (root) {

  const markupHeader = header();
  const markupHome = homeSection();
  const markupAbout = aboutSection();
  const markupCases = casesSection();
  const markupBlog = blogSection();
  const markupTeam = teamSection();
  // const markupContact = contactSection();
  const markupFooter = footerSection();
  const markupError = errorWorning();

  const refs = {
    header: document.querySelector('#js-header'),
    home: document.querySelector('#js-home'),
    about: document.querySelector('#js-about'),
    cases: document.querySelector('#js-cases'),
    blog: document.querySelector('#js-blog'),
    team: document.querySelector('#js-team'),
    // contact: document.querySelector('#js-contact'),
    footer: document.querySelector('#js-footer'),
    form: document.querySelector('#js-form'),
  };

  refs.header.insertAdjacentHTML('beforeend', markupHeader);
  refs.home.insertAdjacentHTML('beforeend', markupHome);
  refs.about.insertAdjacentHTML('beforeend', markupAbout);
  refs.cases.insertAdjacentHTML('beforeend', markupCases);
  refs.blog.insertAdjacentHTML('beforeend', markupBlog);
  refs.team.insertAdjacentHTML('beforeend', markupTeam);
  // refs.contact.insertAdjacentHTML('beforeend', markupContact);
  refs.footer.insertAdjacentHTML('beforeend', markupFooter);

  const refs_ = {
    form: document.querySelector('.contact__form'),
    form: document.querySelector('.contact__form'),
    labelEmail: document.querySelector('.email'),
    labelName: document.querySelector('.name'),
    inputEmail: document.querySelector('#email'),
    inputName: document.querySelector('#name'),
    button: document.querySelector('.form__btn'),
    header: document.querySelector('.navigation'),
  };

  let fields = refs_.form.querySelectorAll('.field');

  refs_.inputName.addEventListener('input', handleLabelName);
  refs_.inputEmail.addEventListener('input', handleLabelEmail);
  // refs_.button.addEventListener('click', handlerButton);
  // refs_.form.addEventListener('submit', handleSubmit);


  function handleLabelName(e) {
    e.preventDefault();
    const inputValue = e.target.value;

    if (inputValue) {
      refs_.labelName.classList.remove('invisible');
    } else {
      refs_.labelName.classList.add('invisible');
    }
  }

  function handleLabelEmail(e) {
    e.preventDefault();
    const inputValue = e.target.value;

    if (inputValue) {
      refs_.labelEmail.classList.remove('invisible');
    } else {
      refs_.labelEmail.classList.add('invisible');
    }
  }

  function handlerButton(e) {
    e.preventDefault();
    removeValidation();
    checkFieldsPresence();
  }

  function handleSubmit(e) {

  }

  const generateError = function (text) {
    const error = document.createElement('div')
    error.className = 'error';
    error.style.color = 'red';
    error.innerHTML = text;
    return error
  };

  const removeValidation = function () {
    const errors = refs_.form.querySelectorAll('.error')

    for (var i = 0; i < errors.length; i++) {
      errors[i].remove();
    }

  };

  const checkFieldsPresence = function () {
    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].value) {
        const error = generateError(markupError);
        refs_.form[i].parentElement.insertBefore(error, fields[i]);
        // refs_.form.prepend(error);
      }
    }
  };


  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }


  window.onscroll = function (evt) {

    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    let resize = screen.width;

    if (resize <= 321) {
      refs_.header.style.height = '120px';
    } else {

      refs_.header.style.height = '70px';
    }

    if (posTop > 2) {
      refs_.header.style.opacity = 0.8;
      refs_.header.style.position = "fixed";
    }

  }
}
