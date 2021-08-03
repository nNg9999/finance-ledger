'use strict';

import homeSection from '../Home/home.hbs';
import header from '../Header/header.hbs';
import aboutSection from '../About/about.hbs';
import casesSection from '../Cases/cases.hbs';
import blogSection from '../Blog/blog.hbs';
import teamSection from '../Team/team.hbs';
import contactSection from '../Contact/contact.hbs';
import footerSection from '../Footer/footer.hbs';

import './importImages';

// import '../../services/apiForm';

export default function (root) {

  const markupHeader = header();
  const markupHome = homeSection();
  const markupAbout = aboutSection();
  const markupCases = casesSection();
  const markupBlog = blogSection();
  const markupTeam = teamSection();
  const markupContact = contactSection();
  const markupFooter = footerSection();

  const refs = {
    header: document.querySelector('#js-header'),
    home: document.querySelector('#js-home'),
    about: document.querySelector('#js-about'),
    cases: document.querySelector('#js-cases'),
    blog: document.querySelector('#js-blog'),
    team: document.querySelector('#js-team'),
    contact: document.querySelector('#js-contact'),
    footer: document.querySelector('#js-footer'),
    form: document.querySelector('#js-form'),
  };

  refs.header.insertAdjacentHTML('beforeend', markupHeader);
  refs.home.insertAdjacentHTML('beforeend', markupHome);
  refs.about.insertAdjacentHTML('beforeend', markupAbout);
  refs.cases.insertAdjacentHTML('beforeend', markupCases);
  refs.blog.insertAdjacentHTML('beforeend', markupBlog);
  refs.team.insertAdjacentHTML('beforeend', markupTeam);
  refs.contact.insertAdjacentHTML('beforeend', markupContact);
  refs.footer.insertAdjacentHTML('beforeend', markupFooter);



console.log(refs.form);
// document.querySelector(".contact__form").addEventListener("submit", handleSubmit);

// const handleSubmit = (e) => {
//   e.preventDefault()
//   let myForm = document.getElementById('dogPictures');
//   let formData = new FormData(myForm)
//   fetch('/', {
//     method: 'POST',
//     headers: { "Content-Type": "multipart/form-data" },
//     body: new URLSearchParams(formData).toString()
//   }).then(() => console.log('Form successfully submitted')).catch((error) =>
//     alert(error))
// }

 }
