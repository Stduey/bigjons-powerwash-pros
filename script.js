document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quote-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const subject = encodeURIComponent("Free Quote Request - Big Jon's PowerWash Pros");
  const body = encodeURIComponent([
    `Name: ${form.get('name') || ''}`,
    `Phone: ${form.get('phone') || ''}`,
    `Email: ${form.get('email') || ''}`,
    `Service Type: ${form.get('service') || ''}`,
    '',
    'Message:',
    `${form.get('message') || ''}`
  ].join('\n'));
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});
