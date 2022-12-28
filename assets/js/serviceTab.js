function activeDeactiveFun(e) {
  const targetName = e.getAttribute('name');
  const getEl = document?.getElementById('services-tab');
  const allServiceTriger = getEl?.querySelectorAll('.triger');
  const serviceContents = getEl?.querySelectorAll('.single-service');
  allServiceTriger.forEach((itm) => {
    const singleItemName = itm.getAttribute('name');
    if (targetName === singleItemName) {
      itm.classList.add('active');
    } else itm.classList.remove('active');
  });

  serviceContents?.forEach((singleService) => {
    const serviceName = singleService.getAttribute('name');
    console.log(targetName, serviceName);
    if (targetName === serviceName) {
      singleService.classList.add('show');
    } else {
      singleService.classList.remove('show');
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {});

function scrollToDiv(e, menu) {
  // Active deactive menu
  const allMenu = document?.querySelectorAll('.main-menu li a');
  console.log(allMenu);
  allMenu?.forEach((itm) => {
    itm.classList.remove('active');
  });
  e.className = 'active'
  // Scroll to div
  const home = document?.getElementById('home');
  const service = document?.getElementById('services');
  const aboutUs = document?.getElementById('about_us');
  const contact = document?.getElementById('contact_us');
  const footer = document?.getElementById('footer-area');

  const homeHeight = home?.clientHeight;
  const serviceHeight = service?.clientHeight;
  const aboutHeight = aboutUs?.clientHeight;
  const contactHeight = contact?.clientHeight;
  const footerHeight = footer?.clientHeight;

  if (menu === 'home') {
    window.scroll(0, 0);
  } else if (menu === 'services') {
    const totalheight = homeHeight - 100;
    window.scroll(0, totalheight);
  } else if (menu === 'about_us') {
    const totalheight = homeHeight + serviceHeight - 100;
    window.scroll(0, totalheight);
  } else if (menu === 'contact_us') {
    const totalheight = homeHeight + serviceHeight + contactHeight - 100;
    window.scroll(0, totalheight);
  }
}
