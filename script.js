/*Navbar*/
const contenedor = document.querySelector(".container");

const julio = [
	"Sobre-mi",
	"Skills",
	"Formación",
	"Hobbies",
	"Contacto@julio.com",
];

const section = document.createElement("section");
const nav = document.createElement("nav");
const ul = document.createElement("ul");
ul.className = "ul__nav";

for (const elemento of julio) {
	const li = document.createElement("li");
	li.classList = "menu__list";
	const ancora = document.createElement("a");
	ancora.setAttribute("href", "#" + elemento.toLowerCase());
	ancora.textContent = elemento;
	li.appendChild(ancora);
	ul.appendChild(li);
}

nav.appendChild(ul);
section.appendChild(nav);
contenedor.appendChild(section);
console.log(contenedor);

/*Seccion Perfil*/

const sectionPerfil = document.createElement("section");
sectionPerfil.classList = "title";
const divtitle = document.createElement("div");
divtitle.className = "title__div";
const imgPerfil = document.createElement("img");
imgPerfil.className = "img__perfil";
imgPerfil.src = "assets/julito.jpg";
const divContainer = document.createElement("div");
divContainer.className = "title__container";
const title = document.createElement("h2");
title.textContent = "Julio Realza construyo paginas web";
const subTitle = document.createElement("h3");
subTitle.textContent =
	"Soy formado de manera autodidacta estudiando por mi cuenta y actualmente estoy participando en el proyecto Oracle ONE en el Grupo G3 en Alura Latam Front-end.";

const ulRedesSociales = document.createElement("ul");
ulRedesSociales.className = "ul__social";
const liGit = document.createElement("li");
const liLinkedin = document.createElement("li");
const liCv = document.createElement("li");
liGit.innerHTML = `
<a href="https://github.com/julioxido" target="_blank" ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50"
style="fill:#0288D1">
    <path  d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
</svg></a>
`;

liLinkedin.innerHTML = `
<a href="https://www.linkedin.com/in/julio-cesar-realza-rojas-/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 45 45">
  <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
  </svg></a>


`;
ulRedesSociales.appendChild(liGit);
ulRedesSociales.appendChild(liLinkedin);

divtitle.appendChild(imgPerfil);
divContainer.appendChild(title);
divContainer.appendChild(subTitle);
divtitle.appendChild(divContainer);
divContainer.appendChild(ulRedesSociales);
sectionPerfil.appendChild(divtitle);
contenedor.appendChild(sectionPerfil);

// Escribir mi nombre animado
let nombre = document.querySelector("h2");
let str = nombre.innerHTML;
nombre.innerHTML = "";
let velocidad = 90;
let i = 0;

function escribir() {
	if (i < str.length) {
		nombre.innerHTML += str.charAt(i);
		i++;
		setTimeout(escribir, velocidad);
	}
}
escribir();

// Sobre Mi
const sectionSobreMi = document.createElement("section");
sectionSobreMi.setAttribute("id", "sobre-mi");
sectionSobreMi.className = "about-section";
const divSobreMi = document.createElement("div");
divSobreMi.className = "about__container";
// const sobreMi = document.createElement("h3");
// sobreMi.className = "aboot__title";
// sobreMi.textContent = "Sobre Mi";
const descripcion = document.createElement("p");
descripcion.className = "descriccion";
descripcion.insertAdjacentHTML(
	"beforeend",
	`Soy tecnico de soporte Ti con mas de 10 anos de experiencia y hace 2 anos comenzo mi pasion por el desarrollo de aplicaciones webs y me adentre a estudiar por mi cuenta primeramente entre tutoriales y cursos en linea de los cuales aprendi las primeras herramientas para programar una web sencilla como lo es HTML5 y CSS3 con las cuales solo creaba de manera estatica maquetacion de paginas para ir conociendo la forma en como se iban cambiando mediante css la esrtuctura del lenguaje demarcado pero luego quise crear cosas dinamicas y fue donde conoci Javascript no fue facil aprenderlo pero con bastante dedicacion, practica y un programa que lanzo Oracle mediante Alura Latam Brasil quede Seleccionado para un curso completo con teoria, clases didacticas, pedagogicas y practicas comence a entender la sintaxis y la logica para trabajar con este lenguaje que me abrio un mundo nuevo con respecto al desarrollo frontend gracias a todo el materia de ese curso aprendi a trabajar con Js, github, git y crear pequenas aplicaciones con las cuales fui dominando cada tema de el leguaje del navegador y obtuve mi certificado Front-End
<p>Tambien recibi de parte de mi hermano que es programador full-Stack la recomendacion de que aprendiera ReactJs que es la principal libreria que lidera actualmente el Desarrollo Web y gracias a el estoy practicando, aprendiendo y creando aplicaciones en las cuales practico todas las tecnologias que nos ofrece esta gran herramienta como lo es React</p>
<p>Este portafolio que les presento esta realizado en Vanilla Javascript puro y duro como decia uno de mis profesores en linea y muy pronto les traere la version 2.0 pero en React y asi mostrarle mis avances y conocimientos gracias por su atencion</p>`
);

divSobreMi.appendChild(descripcion);
sectionSobreMi.appendChild(divSobreMi);
contenedor.appendChild(sectionSobreMi);

// Skills
const skills = [
	{ tecnologia: "HTML 5", img: "assets/htlm.png" },
	{ tecnologia: "CSS", img: "assets/css_icon.png" },
	{ tecnologia: "Javascript", img: "assets/js_icon.png" },
	{ tecnologia: "React Js", img: "assets/react_icon.png" },
	{ tecnologia: "GitHub", img: "assets/github.png" },
];

const sectioSkills = document.createElement("section");
sectioSkills.className = "skills__section";
sectioSkills.setAttribute("id", "skills");
const skillsH3 = document.createElement("h3");
skillsH3.textContent = "Skills";
const divSkills = document.createElement("div");
divSkills.className = "skills__line";

skills.forEach((tecnologia, i) => {
	divSkills.insertAdjacentHTML(
		"beforeend",
		`<div class='skills__box'>
       <ul>
        <li ><img class='imgTec'  width="40" height="40" src=${tecnologia.img}></li>
        <li class='tecnology'>${tecnologia.tecnologia}</li>
      </ul>
    </div>`
	);
});

sectioSkills.appendChild(skillsH3);
sectioSkills.appendChild(divSkills);
contenedor.appendChild(sectioSkills);

// Formacion y estudios
const sectionFormacion = document.createElement("section");
sectionFormacion.className = "academic";
sectionFormacion.setAttribute("id", "formación");
sectionFormacion.insertAdjacentHTML(
	"beforeend",
	`<h3 class="academic__title" >Formación académica</h3>
<div class="academic__courses">
    <div class="academic__courses__box">
        <ul class="academic__courses__list">
            <li class="academic__courses__item__img"><img width="200" height="200" src="assets/jsjab.jpg"></li>
            <li class="academic__courses__item__title"><h4>Javascript Vanilla</h4></li>
            <li class="academic__courses__item__subtitle"><p>JAB - 2021</p></li>
        </ul>
    </div>
    <div class="academic__courses__box">
        <ul class="academic__courses__list">
            <li class="academic__courses__item__img"><img width="200" height="200" src="assets/aluraLatam.png"></li>
            <li class="academic__courses__item__title"><h4>Formación Front End G3 - ONE</h4></li>
            <li class="academic__courses__item__subtitle"><p>Alura - 2022</p></li>
        </ul>
    </div>
    <div class="academic__courses__box">
        <ul class="academic__courses__list">
            <li class="academic__courses__item__img"><img width="200" height="200" src="assets/images.jfif"></li>
            <li class="academic__courses__item__title"><h4>React Js</h4></li>
            <li class="academic__courses__item__subtitle"><p>Udemy - En curso</p></li>
        </ul>
    </div>
</div>

`
);
contenedor.appendChild(sectionFormacion);

// Hobbies

const sectionHobbies = document.createElement("section");
sectionHobbies.classList.add("hobbies");
sectionHobbies.setAttribute("id", "hobbies");
sectionHobbies.insertAdjacentHTML(
	"beforeend",
	`
          <h3 class="hobbies__title">Hobbies</h3>
            <div class="hobbies__line">
                <div class="hobbies__box">
                    <ul>
                        <li class="hobbies__img"><img  width="40" height="40" src="assets/skate_icon.png"></li>
                        <li class="hobbies__name"> Patinaje</li>
                    </ul>
                </div>

                <div class="hobbies__box">
                    <ul>
                        <li class="hobbies__img"> <img  width="40" height="40" src="assets/musics.png" alt=""></li>
                        <li class="hobbies__name">Oir música</li>
                    </ul>
                </div>

                <div class="hobbies__box">
                    <ul>
                        <li class="hobbies__img"><img  width="40" height="40" src="assets/tv_icon.png" alt=""></li>
                        <li class="hobbies__name">Ver séries</li>
                    </ul>
                </div>

                <div class="hobbies__box">
                    <ul>
                        <li class="hobbies__img"> <img  width="40" height="40" src="assets/forkspoon_icon.png" alt=""> </li>
                        <li class="hobbies__name">Cocinar</li>
                    </ul>
                </div>

                <div class="hobbies__box">
                    <ul>
                        <li class="hobbies__img"> <img  width="40" height="40" src="assets/tenis.png" alt=""> </li>
                        <li class="hobbies__name">Pin Pon</li>
                    </ul>
                </div>
            </div>`
);
contenedor.appendChild(sectionHobbies);

// Contacto
const sectionContacto = document.createElement("section");
sectionContacto.classList.add("form__contacto");
sectionContacto.setAttribute("id", "contacto@julio.com");
sectionContacto.insertAdjacentHTML(
	"beforeend",
	`<div  class="formcontato__contacto">
      <div class="formcontato__text">
          <h3 class="formcontato__subtext">¿Quieres contactarme?</h3>
          <span class="formcontato__subtext">Complete el siguiente formulario y me pondré en contacto lo antes posible.</span>
          <form id='formulario' class="formcontato__form" name="form">
              <input class="formcontato__input" type="text" id="nombre" placeholder="Nombre" require>
                <p></p>
              <input class="formcontato__input" type="email" id="email" placeholder="E-mail" >
                <p></p>
              <input class="formcontato__input" type="text" id="asunto" placeholder="Asunto" >
                <p></p>
              <textarea class="formcontato__textarea" rows="5" cols="40" id="mensaje" name="mensplaceholder="Mensaje" ></textarea>
              <button type="submit" class="btn">Enviar mensaje</button>
              </form>
      </div>
  </div>
`
);
contenedor.appendChild(sectionContacto);

// Validacion Formulario
const formulario = document.querySelector("#formulario");
console.log(formulario);
const btn = document.querySelector(".btn");
const usuario = document.querySelector("#nombre");
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const regex =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

console.log(formulario);
console.log(usuario);
console.log(email);
console.log(asunto);
console.log(mensaje);
formulario.addEventListener("submit", (e) => {
	e.preventDefault();
	// alert("bhjhg");
	validarCampos();
});

const validarCampos = () => {
	const usuarioValor = usuario.value.trim().toLocaleLowerCase();
	const emailValor = email.value.trim().toLocaleLowerCase();
	const asuntoValor = asunto.value.trim().toLocaleLowerCase();
	if (!usuarioValor) {
		console.log("Campo vacio");
		validateError(usuario, "Campo Vacio");
	} else {
		validateOk(usuario);
	}
	//Validando campo usuario
	if (!emailValor) {
		validateError(email, "Campo Vacio");
	} else if (!validateEmail(emailValor)) {
		validateError(email, "El email no es valido");
	} else {
		validateOk(email);
	}
};

const validateError = (input, msj) => {
	console.log("a");
	console.log(input);
	const formControl = input.parentNode;
	console.log(formControl);
	const alert = formControl.querySelector("p");
	console.log(alert);
	alert.className = "alert";
	alert.innerText = msj;
};

// validateError(usuario, "error");
const validateOk = (input) => {
	const formControl = input.parentNode;
	const alert = formControl.querySelector("p");
	alert.innerText = "";
	formControl.className = "succes";
};

const validateEmail = (email) => {
	return regex.test(email);
};

// Footer

const sectionFooter = document.createElement("section");
sectionFooter.className = "footer";
sectionFooter.insertAdjacentHTML(
	"beforeend",
	`
<div class="footer__rodape">
  <span>Desarrollado por Julio Realza</span>
</div>
`
);

contenedor.appendChild(sectionFooter);
