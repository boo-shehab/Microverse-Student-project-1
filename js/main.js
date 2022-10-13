const burgerButton = document.querySelector(' .burger-button');
burgerButton.addEventListener('click', () => { burgerButton.classList.toggle('active'); });
const menuLinkes = document.querySelectorAll('header nav ul.linkes li');
for (let i = 0; i < menuLinkes.length; i += 1) {
  menuLinkes[i].addEventListener('click', () => { burgerButton.classList.toggle('active'); });
}

const project = [
  {
    name: 'Tonic',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featured: ['Back End Dev', '2015'],
    image: '../img/Snapshoot Portfolio_1.svg',
    technologies: ['html', 'css', 'javaScript'],
    live_link: '#',
    source_link: '#',
  },
  {
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featured: ['Back End Dev', '2015'],
    image: '../img/Snapshoot Portfolio_2.svg',
    technologies: ['html', 'css', 'javaScript', 'Ruby on rails'],
    live_link: '#',
    source_link: '#',
  },
  {
    name: 'Tonic',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featured: ['Back End Dev', '2015'],
    image: '../img/Snapshoot Portfolio_3.svg',
    technologies: ['html', 'css', 'javaScript', 'Ruby on rails'],
    live_link: '#',
    source_link: '#',
  },
  {
    name: 'Tonic',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featured: ['Back End Dev', '2015'],
    image: '../img/Snapshoot Portfolio_4.svg',
    technologies: ['html', 'css', 'javaScript', 'Ruby on rails'],
    live_link: '#',
    source_link: '#',
  },
];
function pupUpMenuid(id) {
  const mainPopUp = project[id];

  const mainArticle = document.createElement('article');
  mainArticle.classList.add('popup-card');

  document.querySelector('.bg-popup').classList.add('active');
  const headerGroup = document.createElement('div');
  headerGroup.classList.add('header-group-popup');
  const client = document.createElement('div');
  client.classList.add('client');
  const titleHeader = document.createElement('h2');
  titleHeader.classList.add('title');
  titleHeader.textContent = mainPopUp.name;
  client.appendChild(titleHeader);
  const br = document.createElement('br');
  client.appendChild(br);
  const spanClient = document.createElement('span');
  spanClient.textContent = 'CANOPY';
  client.appendChild(spanClient);
  const featured = document.createElement('ul');
  for (let i = 0; i < mainPopUp.featured.length; i += 1) {
    const li = document.createElement('li');
    li.textContent = mainPopUp.featured[i];
    featured.appendChild(li);
  }
  client.appendChild(featured);
  headerGroup.appendChild(client);
  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close-popup');
  closeBtn.textContent = 'X';
  closeBtn.addEventListener('click', () => {
    mainArticle.innerHTML = '';
    mainArticle.remove();
    document.querySelector('.bg-popup').classList.remove('active');
  });
  headerGroup.appendChild(closeBtn);
  mainArticle.appendChild(headerGroup);
  const hgroup = document.createElement('hgroup');
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('img-div');
  const mainImg = document.createElement('img');
  mainImg.setAttribute('src', mainPopUp.image);

  imgDiv.appendChild(mainImg);
  hgroup.appendChild(imgDiv);

  const divContainer = document.createElement('div');
  divContainer.classList.add('main-contaner');
  const pText = document.createElement('p');
  pText.classList.add('info');
  pText.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';
  divContainer.appendChild(pText);
  const divTagesAndbutton = document.createElement('div');
  const divTages = document.createElement('div');
  divTages.classList.add('tages');
  for (let i = 0; i < mainPopUp.technologies.length; i += 1) {
    const tage = document.createElement('span');
    tage.classList.add('tage');
    tage.textContent = mainPopUp.technologies[i];
    divTages.appendChild(tage);
  }
  divTagesAndbutton.appendChild(divTages);

  const divButtons = document.createElement('div');
  divButtons.classList.add('button-contaner');

  const showBtn = document.createElement('button');
  showBtn.classList.add('normal-button');
  showBtn.classList.add('popup-btn');
  showBtn.setAttribute('src', mainPopUp.live_link);
  showBtn.innerHTML = 'See live <img src="img/Icon - Export.svg" alt="">';
  divButtons.appendChild(showBtn);
  const github = document.createElement('button');
  github.classList.add('normal-button');
  github.classList.add('popup-btn');
  showBtn.setAttribute('src', mainPopUp.source_link);
  github.innerHTML = 'See Source <img src="img/Icon -GitHub.svg" alt="">';
  divButtons.appendChild(github);
  divTagesAndbutton.appendChild(divButtons);
  divContainer.appendChild(divTagesAndbutton);

  hgroup.appendChild(divContainer);

  mainArticle.appendChild(hgroup);

  document.body.appendChild(mainArticle);
}

const viewBtn = document.getElementsByClassName('popup-window');
for (let i = 0; i < viewBtn.length; i += 1) {
  viewBtn[i].addEventListener('click', () => pupUpMenuid(i));
}

const contactFormEmail = document.querySelector('form #email');
const contactFormForm = document.querySelector('form button');

contactFormForm.addEventListener('click', (event) => {
  if (contactFormEmail.value !== contactFormEmail.value.toLowerCase()) {
    event.preventDefault();
    document.querySelector('form .erorr-massege').classList.add('active');
  } else {
    document.querySelector('form .erorr-massege').classList.remove('active');
  }
});
