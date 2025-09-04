// heart count
const heartIcons = document.getElementsByClassName("fa-heart")
const heartCountDisplay = document.getElementById("heart-count")
let count=0
for(const heartIcon of heartIcons) {

      heartIcon.addEventListener("click", function () {
        count++;
        heartCountDisplay.innerText = count;
      });
    }
// coin count section// call history section

   
const coinCountDisplay=document.getElementById("coin-count")
const callIcons=document.getElementsByClassName("call")
let coin=100

for(const callIcon of callIcons) {
callIcon.addEventListener("click", function () {
const parentDiv = this.parentElement.parentElement;
const textName = parentDiv.querySelector(".name").innerText;
const phoneNumber=parentDiv.querySelector(".number").innerText;
const date = new Date().toLocaleTimeString()
  
   if(coinCountDisplay.innerText<20){
      alert("not enough coins")
      return
 }
    coin=coin-20
   coinCountDisplay.innerText=coin
   alert("You are calling to " + textName + " || number: " + phoneNumber  )     
    const historyContainer=document.getElementById("history-container")

     const div  =document.createElement("div")
     div.innerHTML=`
     <div class=" mx-5 flex justify-between bg-[#fafafa] rounded-lg p-4 shadow-xl mb-3 text-black">
    <div><h3 class="font-bold text-xl text-black">${textName}</h3>
    <h4 >${phoneNumber}</h4></div>
    <div class="flex items-center " >
    <h5 >${date}</h5>    
    </div>
</div>        
     `;
      historyContainer.append(div)  

   

});

}

// clear history

document.getElementById("clr").addEventListener("click", function () {
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerHTML = "";

});

// copy number
let copyCount=0
const copyButtons = document.getElementsByClassName("copy-btn");
const copyCountDisplay=document.getElementById("copy-count")
for (let btn of copyButtons) {
  btn.addEventListener("click", async function () {
copyCount++
        copyCountDisplay.innerText = copyCount;

    const parentDiv = this.parentElement.parentElement;

    const phoneNumber = parentDiv.querySelector(".number").innerText.trim();

    try {
      await navigator.clipboard.writeText(phoneNumber);
      this.textContent = "Copied!";
    } catch (err) {
      const ta = document.createElement("textarea");
      ta.value = phoneNumber;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        const ok = document.execCommand("copy");
        this.textContent = ok ? "Copied!" : "Copy failed";
      } catch {
        alert("Copy failed. Please copy manually:\n" + phoneNumber);
      } finally {
        document.body.removeChild(ta);
      }
    } finally {
      setTimeout(() => (this.textContent = "Copy"), 1200);
    }
  });
}
