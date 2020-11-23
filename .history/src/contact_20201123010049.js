export default class Contact {
  static contactPage() {
    const contactInfo = document.createElement('div');
    contactInfo.className += 'd-flex flex-column justify-content-center text-center';
    const phone = document.createElement('div');
    phone.className += 'text-center';
    phone.innerHTML = 'Phone: +90 555 555 55 55';
    const email = document.createElement('div');
    email.className += 'text-center';
    email.innerHTML = 'E-mail: someMail@example.com';
    contactInfo.appendChild(phone);
    contactInfo.appendChild(email);
    document.getElementById('content').appendChild(contactInfo);
  }
}
