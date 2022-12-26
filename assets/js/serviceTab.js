document.addEventListener('DOMContentLoaded', () => {
  // Services tab
  const getEl = document?.getElementById('services-tab');
  const allServiceTriger = getEl?.querySelectorAll('.triger');
  const allServiceDetails = getEl?.querySelectorAll('.single-service');
});

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
    console.log(targetName, serviceName)
    if (targetName === serviceName) {
      singleService.classList.add('show');
    } else {
      singleService.classList.remove('show');
    }
  });
}
