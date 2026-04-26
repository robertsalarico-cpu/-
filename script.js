// 滚动
function scrollToSection(){
document.getElementById("spots").scrollIntoView({behavior:"smooth"});
}

// 弹窗
function openModal(){
document.getElementById("modal").style.display="flex";
}
function closeModal(){
document.getElementById("modal").style.display="none";
}

// 点击背景关闭
document.getElementById("modal").onclick = closeModal;
document.querySelector(".modal-box").onclick = e=>e.stopPropagation();

// 导航变色
const header=document.getElementById("header");
window.addEventListener("scroll",()=>{
if(window.scrollY>50){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}
});

// 滚动动画
const fades=document.querySelectorAll(".fade");
window.addEventListener("scroll",()=>{
fades.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight - 100){
el.classList.add("show");
}
});
});
// 打开/关闭客服面板
function toggleChat(){
    const panel = document.getElementById("chat-panel");
    panel.style.display = panel.style.display === "block" ? "none" : "block";
}

// WhatsApp
function openWhatsApp(){
    window.open("https://wa.me/4917627709060","_blank");
}

// Telegram
function openTelegram(){
    window.open("https://t.me/zhou16888888","_blank");
}

// 微信提示
function showWeChat(){
    alert("微信号：your_wechat");
}
// 打开微信二维码
function showWeChat(){
    document.getElementById("wechat-modal").style.display = "flex";
}
// ========================
// WhatsApp（手机跳APP）
// ========================
function openWhatsApp() {

    const ua = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|android|ipad/.test(ua);

    if(isMobile){

        const start = Date.now();

        // 尝试打开APP
        window.location.href = "whatsapp://send?phone=4917627709060";

        // 兜底（如果APP没有安装）
        setTimeout(() => {
            if (Date.now() - start < 2000) {
                window.location.href = "https://wa.me/4917627709060";
            }
        }, 1200);

    } else {
        window.open("https://web.whatsapp.com", "_blank");
    }
}

// ========================
// Telegram（手机跳APP）
// ========================
function openTelegram() {

    const ua = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|android|ipad/.test(ua);

    if (isMobile) {

        const start = Date.now();

        // 尝试打开APP
        window.location.href = "tg://resolve?domain=zhou16888888";

        // 兜底
        setTimeout(() => {
            if (Date.now() - start < 2000) {
                window.open("https://t.me/zhou16888888", "_blank");
            }
        }, 1200);

    } else {
        window.open("https://t.me/zhou16888888", "_blank");
    }
}

// ========================
// 微信二维码弹窗（不变）
// ========================
function showWeChat() {
    document.getElementById("wechat-modal").style.display = "flex";
}

function closeWeChat() {
    document.getElementById("wechat-modal").style.display = "none";
}

// ========================
// 客服悬浮按钮（不变）
// ========================
function toggleChat() {
    const panel = document.getElementById("chat-panel");
    panel.style.display = panel.style.display === "block" ? "none" : "block";
}

// 关闭
function closeWeChat(){
    document.getElementById("wechat-modal").style.display = "none";
}

// 点击背景关闭
document.getElementById("wechat-modal").onclick = closeWeChat;
document.querySelector(".wechat-box").onclick = e => e.stopPropagation();