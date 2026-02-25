
    //commented these out as they annoyed me
    //let a = "Hello";
    //console.log("Hello world");
    //alert("Hello World");

    const buttonA = document.querySelector("#button_A");
    const headingA = document.getElementById("heading_A");

    buttonA.addEventListener('click', function(){
      const name = prompt("what is your name?");
      alert (`Hello ${name}, nice to see you!`);
      headingA.textContent = `Welcome ${name}`;

    });

    const textBox = document.querySelector("#textBox");
    const output = document.querySelector("#output");
    textBox.addEventListener("keydown", (event) => {
        output.textContent =`You pressed "${event.key}".`;
    });

    const button = document.querySelector("#button_B");

    function greet(){
        const name = prompt("What is your name?");
        const greeting = document.querySelector("#greeting");
        greeting.textContent = `Hello ${name}, nice to see you!`;
    }
    
    button.addEventListener("click", greet);

