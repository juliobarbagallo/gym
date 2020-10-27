![Product Presentation Image](https://raw.githubusercontent.com/juliobarbagallo/gym/master/src/assets/img/presentation.png)

<a href="https://gym-git-master.juliobarbagallo.vercel.app/landing" target="_blank">Demo</a>

## Table of Contents

* [Description](#Description)
* [Resources](#resources)
* [Credits](#Credits)
* [Contact](#contact)
* [File Structure](#file-structure)

## Description

This is <a href="https://es.reactjs.org/" target="_blank">React</a> landing page, built using a <a href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation" target="_blank">Tailwind css starter kit.</a> Made by Creative tim (see the credits).
I followed the steps from a tutorial in Treversy media <a href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" target="_blank">Youtube channel</a> (also check the credits), but made it for React instead to work in the HTML version from the sarter kit. Also added the functionability to use the contact form by creating a user on emailhs and consuming the API to send emails using Gmail.
Then this is deployed on Vercel with an automatic pipeline linked to GitHub repository. So each time a new version is pushed to that linked branch, it automatically will be deployed on Vercel.

So starting from there, we are assuming you already followed the steps from Creative Tim and downloaded the starter kit and have React and Node already installed.
Following steps: Install and use the rest of the utitlitis implemented.

AOS (For animations)
#### `npm install aos`

Import AOS:
--
import AOS from 'aos';
import 'aos/dist/aos.css';
--
Set AOS parameters:
--
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false, 
    });
    AOS.refresh();
  });
  --
  We are setting the delay, the duration and once attribute for AOS. once: false, means we DON'T want the animation to just happen once, we want to be animated at anytime you scroll down and up again. Set it to true if you don't want this.
  
Use AOS:
--
<div className="container relative mx-auto" data-aos="fade-in">
--
Here we are using AOS to make the text on the Hero section to fade in, that is the div tag which contains the text.


EmailJs (Email service)
#### `npm install emailjs-com --save`

Import and init Emailjs:
--
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';
init(process.env.REACT_APP_USER);
--
Make send mail function:
--
function sendEmail(e) {
    let serviceEmail = process.env.REACT_APP_SERVICE;
    let templateEmail = process.env.REACT_APP_TEMPLATE;
    let userEmail = process.env.REACT_APP_USER;
    
    e.preventDefault();

    emailjs.sendForm(serviceEmail, templateEmail, e.target, userEmail)
    .then((result) => {
        console.log(result.text);
        swal("Listooo!", "Correo enviado!", "success");
    }, (error) => {
        console.log(error.text);
        swal("Error!", "Algo salio mal el intentar enviar el correo. Contacta al administrador!", "error");
    });
    e.target.reset()
}
--
Here we are creating the function that will be called on the submit action from the form button.
And we are passing it the service, the template and the email parameters to be used by EmailJs API.

Contact form and sendEmail function:
--
<form onSubmit={sendEmail}>
--
We are saying that when we click the submit button, it will call sendEmail function with the onSubmit.
Each input must have the attribute name set, this value is the one that will link our data from the form with the emailjs form.
    


Swal (Alert notification for email form fucntion)
#### `npm install sweetalert --save`

Import Swal:
--
import swal from 'sweetalert';
--
Using swal:
If the response from the sendEmail function was successfully, we want the swal alert to show a message to the user to notify that it was ok, so:
--
swal("Listooo!", "Correo enviado!", "success");
--
The same if something goes wrong:
--
swal("Error!", "Algo salio mal el intentar enviar el correo. Contacta al administrador!", "error");
--

## Resources
The documentation for the React Landing Page is hosted at <a href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/#/documentation/landing?ref=rlp-tsk-readme" target="_blank">TailWind starter kit.</a>.
<a href="https://michalsnik.github.io/aos/" target="_blank">AOS</a>
<a href="https://sweetalert.js.org/" target="_blank">SWAL</a>
<a href="https://www.emailjs.com/" target="_blank">EmailJS</a>


## Credits
<a href="https://www.traversymedia.com/" target="_blank">Traversy media</a>

## File Structure
Within the download you'll find the following directories and files:

```
.
|-- README.md
|-- gulpfile.js
|-- jsconfig.json
|-- package.json
|-- public
|   |-- apple-icon.png
|   |-- favicon.ico
|   |-- index.html
|   |-- manifest.json
|   `-- robots.txt
`-- src
    |-- assets
    |   `-- img
    |       |-- team-1-800x800.jpg
    |       |-- team-2-800x800.jpg
    |       |-- team-3-800x800.jpg
    |       `-- team-4-470x470.png
    |-- components
    |   |-- Footer.js
    |   `-- Navbar.js
    |-- index.js
    `-- views
        `-- Landing.js
```
