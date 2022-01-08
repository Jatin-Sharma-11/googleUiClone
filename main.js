const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event){
    if(event.code === "Enter" || event.keyCode == 13){
        search();
    }

});

function search(){
    const input= searchInput.value;

    window.location.href = "https://www.google.com/search?q="+ input +"&sxsrf=AOaemvI9d6FTUZvDdyZ4jhk4dHDJ4l4PdQ%3A1641670339138&source=hp&ei=w-bZYa6hBoSR4-EPp5ue0AQ&iflsig=ALs-wAMAAAAAYdn00_-SkD3lXLkccnJznbTwy491Q-Lu&ved=0ahUKEwjujprL8qL1AhWEyDgGHaeNB0oQ4dUDCAg&uact=5&oq="+input+"&gs_lcp=Cgdnd3Mtd2l6EAMyCAguEIAEELEDMggIABCABBCxAzIKCAAQgAQQhwIQFDIKCAAQgAQQhwIQFDIFCC4QgAQyBQgAEIAEMggIABCABBCxAzIFCAAQgAQyCAgAEIAEELEDMgUILhCABDoHCCMQ6gIQJzoNCC4QxwEQowIQ6gIQJzoECCMQJzoLCAAQgAQQsQMQgwE6CwguEIAEELEDEIMBOggIABCxAxCDAToICC4QsQMQgwE6EQguEIAEELEDEIMBEMcBEK8BUOUBWI0ZYOobaAJwAHgAgAHcAYgBpwmSAQUwLjMuM5gBAKABAbABCg&sclient=gws-wiz"
}
