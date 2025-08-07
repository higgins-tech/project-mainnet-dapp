const menuline = document.querySelector(".ri-menu-2-line");
const navigationbox = document.querySelector(".navigationbox");
const hiddenhome = document.querySelector(".hiddenhome");
const hiddenconnect = document.querySelector(".hiddenconnect");

menuline.addEventListener("click", event => {
    navigationbox.classList.toggle("heightchange");

    function showtext(){
        hiddenhome.classList.toggle("displaychange");
        hiddenconnect.classList.toggle("displaychange");
    }
    setTimeout(showtext, 100);
});


const fixedbox1 = document.querySelector(".fixedbox1");
const fixedbox1content = document.querySelector(".fixedbox1content");
const closefixedbox = document.querySelectorAll(".ri-close-large-line");
const fixedbox2content = document.querySelector(".fixedbox2content");
const fixedbox3content = document.querySelector(".fixedbox3content");
const fixedbox4content = document.querySelector(".fixedbox4content");
const fixedbox6content = document.querySelector(".fixedbox6content");

closefixedbox.forEach(element => {
    element.addEventListener("click", event => {
    fixedbox1.style.display = "none";
    fixedbox1content.style.display = "none";
    fixedbox2content.style.display = "none";
    fixedbox3content.style.display = "none";
    fixedbox4content.style.display = "none";
    fixedbox5content.style.display = "none";
    fixedbox6content.style.display = "none";
    });
});


function openfixed(){
    fixedbox1.style.display = "flex";
    fixedbox1content.style.display = "flex";
}

const walletsboxcontent = document.querySelectorAll(".walletsboxcontent");
const loadingboxlogo = document.getElementById("loadingboxlogo");
const loadingboxtext = document.getElementById("loadingboxtext");
const fixedbox1logo = document.getElementById("fixedbox1logo");
const fixedbox3contentlogo = document.getElementById("fixedbox3contentlogo");
const fixedbox3contenttext = document.getElementById("fixedbox3contenttext");
const fixedbox4logo = document.getElementById("fixedbox4logo");
const fixedbox4text = document.getElementById("fixedbox4text");


    walletsboxcontent[0].addEventListener("click", event => {
        fixedbox1content.style.display = "none";
        loadingboxlogo.src = "img/trustwallet.png";
        loadingboxtext.textContent = "Trust Wallet";
        fixedbox2content.style.display = "flex";
        fixedbox3contentlogo.src = "img/trustwallet.png";
        fixedbox3contenttext.textContent = "Trust Wallet";
        fixedbox4logo.src = "img/trustwallet.png";
        fixedbox4text.textContent = "Trust Wallet";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
    });

    walletsboxcontent[1].addEventListener("click", event => {
        fixedbox1content.style.display = "none";
        loadingboxlogo.src = "img/phantom.png";
        loadingboxtext.textContent = "Phantom";
        fixedbox2content.style.display = "flex";
        fixedbox3contentlogo.src = "img/phantom.png";
        fixedbox3contenttext.textContent = "Phantom";
        fixedbox4logo.src = "img/phantom.png";
        fixedbox4text.textContent = "Phantom";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
    });

    walletsboxcontent[2].addEventListener("click", event => {
        fixedbox1content.style.display = "none";
        loadingboxlogo.src = "img/okx.jpeg";
        loadingboxtext.textContent = "OKX";
        fixedbox2content.style.display = "flex";
        fixedbox3contentlogo.src = "img/okx.jpeg";
        fixedbox3contenttext.textContent = "OKX";
        fixedbox4logo.src = "img/okx.jpeg";
        fixedbox4text.textContent = "OKX";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
    });

    const fixedbox5content = document.querySelector(".fixedbox5content");

    walletsboxcontent[3].addEventListener("click", event => {
        fixedbox1content.style.display = "none";
        fixedbox5content.style.display = "flex";
    });


    fixedbox1logo.addEventListener("click", event => {
        fixedbox1content.style.display = "none";
        loadingboxlogo.src = "img/coinbase.jpeg";
        loadingboxtext.textContent = "Coinbase";
        fixedbox2content.style.display = "flex";
        fixedbox3contentlogo.src = "img/coinbase.jpeg";
        fixedbox3contenttext.textContent = "Coinbase";
        fixedbox4logo.src = "img/coinbase.jpeg";
        fixedbox4text.textContent = "Coinbase";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
    })

    
function reload(){
    fixedbox3content.style.display = "none";
    fixedbox2content.style.display = "flex";
    setTimeout(() => {
        fixedbox2content.style.display = "none";
        fixedbox3content.style.display = "flex";
    }, 8000);
};



function manualconnect(){
    fixedbox3content.style.display = "none";
    fixedbox2content.style.display = "flex";
    setTimeout(() => {
        fixedbox2content.style.display = "none";
        fixedbox4content.style.display = "flex";
    }, 4000);

};

const walletlogo = document.querySelectorAll(".walletlogo");

walletlogo[0].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/1inch.png";
    loadingboxtext.textContent = "1inch Wallet";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/1inch.png";
    fixedbox3contenttext.textContent = "1inch Wallet";
    fixedbox4logo.src = "img/1inch.png";
    fixedbox4text.textContent = "1inch Wallet";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[1].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/argent.png";
    loadingboxtext.textContent = "Argent Wallet";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/argent.png";
    fixedbox3contenttext.textContent = "Argent Wallet";
    fixedbox4logo.src = "img/argent.png";
    fixedbox4text.textContent = "Argent Wallet";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[2].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/atomic.png";
    loadingboxtext.textContent = "Atomic Wallet";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/atomic.png";
    fixedbox3contenttext.textContent = "Atomic Wallet";
    fixedbox4logo.src = "img/atomic.png";
    fixedbox4text.textContent = "Atomic Wallet";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[3].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/best.png";
    loadingboxtext.textContent = "Best Wallet";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/best.png";
    fixedbox3contenttext.textContent = "Best Wallet";
    fixedbox4logo.src = "img/best.png";
    fixedbox4text.textContent = "Best Wallet";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[4].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/bitcoincom.png";
    loadingboxtext.textContent = "Bitcoin.com";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/bitcoincom.png";
    fixedbox3contenttext.textContent = "Bitcoin.com";
    fixedbox4logo.src = "img/bitcoincom.png";
    fixedbox4text.textContent = "Bitcoin.com";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[5].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/blockchain.png";
    loadingboxtext.textContent = "Blockchain.com";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/blockchain.png";
    fixedbox3contenttext.textContent = "Blockchain.com";
    fixedbox4logo.src = "img/blockchain.png";
    fixedbox4text.textContent = "Blockchain.com";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[6].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/BRD.png";
    loadingboxtext.textContent = "BRD Wallet";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/BRD.png";
    fixedbox3contenttext.textContent = "BRD Wallet";
    fixedbox4logo.src = "img/BRD.png";
    fixedbox4text.textContent = "BRD Wallet";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[7].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/cryptocom.png";
    loadingboxtext.textContent = "Crypto.com";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/cryptocom.png";
    fixedbox3contenttext.textContent = "Crypto.com";
    fixedbox4logo.src = "img/cryptocom.png";
    fixedbox4text.textContent = "Crypto.com";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[8].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/exodus.png";
    loadingboxtext.textContent = "Exodus Wallet";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/exodus.png";
    fixedbox3contenttext.textContent = "Exodus Wallet";
    fixedbox4logo.src = "img/exodus.png";
    fixedbox4text.textContent = "Exodus Wallet";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[9].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/here.png";
    loadingboxtext.textContent = "Here Wallet";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/here.png";
    fixedbox3contenttext.textContent = "Here Wallet";
    fixedbox4logo.src = "img/here.png";
    fixedbox4text.textContent = "Here Wallet";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[10].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/imtoken.png";
    loadingboxtext.textContent = "imToken";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/imtoken.png";
    fixedbox3contenttext.textContent = "imToken";
    fixedbox4logo.src = "img/imtoken.png";
    fixedbox4text.textContent = "imToken";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[11].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/klever.png";
    loadingboxtext.textContent = "Klever Wallet";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/klever.png";
    fixedbox3contenttext.textContent = "Klever Wallet";
    fixedbox4logo.src = "img/klever.png";
    fixedbox4text.textContent = "Klever Wallet";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[12].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/kraken.png";
    loadingboxtext.textContent = "Kraken";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/kraken.png";
    fixedbox3contenttext.textContent = "Kraken";
    fixedbox4logo.src = "img/kraken.png";
    fixedbox4text.textContent = "Kraken";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[13].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/leap.png";
    loadingboxtext.textContent = "Leap Wallet";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/leap.png";
    fixedbox3contenttext.textContent = "Leap Wallet";
    fixedbox4logo.src = "img/leap.png";
    fixedbox4text.textContent = "Leap Wallet";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[14].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/ledger.png";
    loadingboxtext.textContent = "Ledger";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/ledger.png";
    fixedbox3contenttext.textContent = "Ledger";
    fixedbox4logo.src = "img/ledger.png";
    fixedbox4text.textContent = "Ledger";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[15].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/magic eden.png";
    loadingboxtext.textContent = "Magic Eden";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/magic eden.png";
    fixedbox3contenttext.textContent = "Magic Eden";
    fixedbox4logo.src = "img/magic eden.png";
    fixedbox4text.textContent = "Magic Eden";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[16].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/metamask.png";
    loadingboxtext.textContent = "Metamask";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/metamask.png";
    fixedbox3contenttext.textContent = "Metamask";
    fixedbox4logo.src = "img/metamask.png";
    fixedbox4text.textContent = "Metamask";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[17].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/pera.png";
    loadingboxtext.textContent = "Pera Algo";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/pera.png";
    fixedbox3contenttext.textContent = "Pera Algo";
    fixedbox4logo.src = "img/pera.png";
    fixedbox4text.textContent = "Pera Algo";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[18].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/rainbow2.png";
    loadingboxtext.textContent = "Rainbow Wallet";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/rainbow2.png";
    fixedbox3contenttext.textContent = "Rainbow Wallet";
    fixedbox4logo.src = "img/rainbow2.png";
    fixedbox4text.textContent = "Rainbow Wallet";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[19].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/robinhood.png";
    loadingboxtext.textContent = "Robinhood";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/robinhood.png";
    fixedbox3contenttext.textContent = "Robinhood";
    fixedbox4logo.src = "img/robinhood.png";
    fixedbox4text.textContent = "Robinhood";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[20].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/safepal.png";
    loadingboxtext.textContent = "Safepal";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/safepal.png";
    fixedbox3contenttext.textContent = "Safepal";
    fixedbox4logo.src = "img/safepal.png";
    fixedbox4text.textContent = "Safepal";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[21].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/solflare.png";
    loadingboxtext.textContent = "Solflare";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/solflare.png";
    fixedbox3contenttext.textContent = "Solflare";
    fixedbox4logo.src = "img/solflare.png";
    fixedbox4text.textContent = "Solflare";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[22].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/terra.png";
    loadingboxtext.textContent = "Terra Wallet";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/terra.png";
    fixedbox3contenttext.textContent = "Terra Wallet";
    fixedbox4logo.src = "img/terra.png";
    fixedbox4text.textContent = "Terra Wallet";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[23].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/tonkeeper.png";
    loadingboxtext.textContent = "Tonkeeper";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/tonkeeper.png";
    fixedbox3contenttext.textContent = "Tonkeeper";
    fixedbox4logo.src = "img/tonkeeper.png";
    fixedbox4text.textContent = "Tonkeeper";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[24].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/venom.png";
    loadingboxtext.textContent = "Venom Wallet";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/venom.png";
    fixedbox3contenttext.textContent = "Venom Wallet";
    fixedbox4logo.src = "img/venom.png";
    fixedbox4text.textContent = "Venom Wallet";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[25].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/xaman.png";
    loadingboxtext.textContent = "Xaman";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/xaman.png";
    fixedbox3contenttext.textContent = "Xaman";
    fixedbox4logo.src = "img/xaman.png";
    fixedbox4text.textContent = "Xaman";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[26].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    loadingboxlogo.src = "img/zerion.png";
    loadingboxtext.textContent = "Zerion";
    fixedbox2content.style.display = "flex";
    fixedbox3contentlogo.src = "img/zerion.png";
    fixedbox3contenttext.textContent = "Zerion";
    fixedbox4logo.src = "img/zerion.png";
    fixedbox4text.textContent = "Zerion";
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            fixedbox3content.style.display = "flex";
        }, 8000);
});

walletlogo[27].addEventListener("click", event => {
    fixedbox1content.style.display = "none";
    fixedbox5content.style.display = "none";
    fixedbox4logo.src = "img/others.png";
    fixedbox4text.textContent = "Other";
    fixedbox4content.style.display = "flex";
});