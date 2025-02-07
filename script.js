let img = document.querySelector("img");
      let txt = document.querySelector("h1");
      let bubu = [
        "https://media.tenor.com/rD9kalJ4luoAAAAM/sadness-rainy-day.gif",
        "https://media.tenor.com/t4bAuODllTcAAAAi/tkthao219-bubududu.gif",
        "https://i.pinimg.com/originals/9e/49/7f/9e497f8c506f6a79c406e347634ecdb5.gif",
        "https://i.pinimg.com/originals/05/0c/5a/050c5a03f7415fb92f082371d3e8cb2a.gif",
        "https://media.tenor.com/lXAQkA1qyewAAAAj/peach-goma.gif",
        "https://media.tenor.com/yZoKXA08ZyYAAAAj/bubu-bubu-dudu.gif"
      ];
      let msg = [
        "NO", "Are you sure?", "Really Sure", "Cookie say yes please", 
        "Don't do this to me", "I am gonna cry", "You are breaking my heart :(", 
        "I am very sad", "I am very very sad", "NO"
      ];
      let happy = "https://i.pinimg.com/originals/d0/e5/45/d0e5451273c83ccf1abe71c366c08b63.gif";

      let num = 0;

      document.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", function() {
          if (this.innerText == "YES") {
            img.src = happy;
            img.style.height = "180px";
            txt.innerText = "Yes, I Knew It 🥰";
            for(let i=0;i<2;i++){
            document.querySelectorAll("button")[i].style.display = "none"
            }
          } else {
            if (num < bubu.length) {
              img.src = bubu[num];
              txt.innerText = msg[Math.floor(Math.random() * msg.length)] ;
              num++;
            } else {
              num = 0;
            }
          }
        });
      });