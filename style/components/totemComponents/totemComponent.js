
  (function () { // uma função auto invocavel
      // Add event listener
      document.addEventListener("mousemove", parallax); // event listener do mouse
      const elem1 = document.querySelector("#parallax1"); //recebe informações da primeira div
      const elem2 = document.querySelector("#parallax2"); //recebe informações da segunda div

      // Magic happens here
      function parallax(e) {
          //Ultiliza a metade do width e do height para achar o centro da tela.
          let _w = window.innerWidth / 2;
          let _h = window.innerHeight / 2;
          //Obtem a posição do mouse
          let _mouseX = e.clientX;
          let _mouseY = e.clientY;

          // posição do mouse - centro da tela multiplicado por 0.01 é a distacia em px que o elemento ira mover.
          let _depth1X = (_mouseX - _w) * 0.01;
          let _depth1Y = (_mouseY - _h) * 0.01;
          let translateElem1 = `translate(${_depth1X}px, ${_depth1Y}px)`;

          // Elem2 moves faster and covers a larger distance
          let _depth2X = (_mouseX - _w) * 0.03;
          let _depth2Y = (_mouseY - _h) * 0.03;
          let translateElem2 = `translate(${_depth2X}px, ${_depth2Y}px)`;

          
          console.log(translateElem1, translateElem2);
          elem1.style.transform = translateElem1;
          elem2.style.transform = translateElem2;
      }
  })();

