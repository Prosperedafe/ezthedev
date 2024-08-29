<template>
    <header class="fixed w-full z-10 backdrop-blur-[6px] bg-primaryBg md:bg-transparent">
        <nav class="flex md:block items-center justify-between px-[5%] py-4 md:py-0 md:px-0 relative">
            <RouterLink class="text-xl block md:hidden font-bold text-primaryText" to="/">EZRA SOUKOU</RouterLink>
            <div ref="mobileNavRef" :class="mobileNavClasses">
                <RouterLink class="text-2xl hidden md:block font-bold text-primaryText" to="/">EZRA SOUKOU</RouterLink>
                <div class="flex items-center justify-between md:hidden">
                    <RouterLink class="text-xl font-bold text-primaryText" to="/">EZRA SOUKOU</RouterLink>
                    <button @click="toggleNavActive()" class="-mr-4">
                        <svg width="59" height="33" viewBox="0 0 59 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_168_2764)">
                                <path
                                    d="M22 23.7091L29.2091 16.5L36.4183 23.7091M36.4183 9.29088L29.2078 16.5L22 9.29088"
                                    stroke="#545454" strokeWidth="2.0625" strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_168_2764">
                                    <rect width="59" height="33" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
                <ul
                    class="flex flex-col md:flex-row text-primaryText font-medium gap-y-4 md:gap-y-0 gap-x-6 text-2xl md:text-lg mt-24 md:mt-0 mb-8 md:mb-0">
                    <li>
                        <RouterLink to="/about">Project folio</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About Me</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">Read Cv</RouterLink>
                    </li>
                </ul>
                <button @click="toggleActiveStyle()"
                    class="flex justify-center items-center bg-primaryText rounded-[25px] text-white gap-2 px-6 py-3 text-base">
                    <span>LET'S TALK</span>
                    <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M19.0705 5.774C18.6746 5.84438 18.1163 6.02654 17.2205 6.32255L10.458 8.56332C9.59545 8.84898 8.98712 9.05081 8.54962 9.22055C8.38904 9.28068 8.23186 9.34944 8.07878 9.42651C7.9892 9.47309 7.95795 9.49896 7.95587 9.49896C7.85553 9.59547 7.77575 9.71103 7.72127 9.83878C7.66678 9.96653 7.63871 10.1039 7.63871 10.2426C7.63871 10.3814 7.66678 10.5187 7.72127 10.6464C7.77575 10.7742 7.85553 10.8898 7.95587 10.9863C7.99439 11.0146 8.03555 11.0392 8.07878 11.0597C8.18295 11.1146 8.33399 11.1819 8.54962 11.2667C8.98712 11.4354 9.59545 11.6373 10.458 11.9229L10.5163 11.9426C10.8007 12.0357 11.0507 12.1185 11.2809 12.2396C11.8358 12.5312 12.2896 12.982 12.583 13.5334C12.7048 13.7611 12.7882 14.0095 12.8819 14.2931L12.9027 14.351C13.1892 15.208 13.3923 15.8125 13.5632 16.2472C13.6232 16.4069 13.6924 16.5631 13.7705 16.715C13.8173 16.804 13.8434 16.835 13.8434 16.8371C13.9405 16.9368 14.0568 17.0161 14.1854 17.0702C14.3139 17.1243 14.4522 17.1522 14.5918 17.1522C14.7314 17.1522 14.8697 17.1243 14.9982 17.0702C15.1268 17.0161 15.2431 16.9368 15.3402 16.8371C15.3687 16.7988 15.3935 16.7579 15.4142 16.715C15.4694 16.6115 15.5371 16.4614 15.6225 16.2461C15.7923 15.8114 15.9955 15.208 16.283 14.3521L18.5361 7.63389C18.835 6.74379 19.0184 6.18696 19.0882 5.7947L19.0934 5.77089C19.0854 5.77225 19.0774 5.77363 19.0694 5.77503M18.7048 3.73712C19.2777 3.63569 20.0642 3.60567 20.6684 4.20597C21.2725 4.80627 21.2413 5.58666 21.1402 6.15695C21.0402 6.71792 20.8038 7.42068 20.5382 8.21349L20.5132 8.28801L18.259 15.0052L18.2486 15.0362C17.9736 15.8559 17.7548 16.5101 17.5621 16.9986C17.3819 17.4591 17.1684 17.9352 16.8455 18.2685C16.5539 18.57 16.204 18.8098 15.8168 18.9737C15.4296 19.1375 15.0131 19.222 14.5923 19.222C14.1715 19.222 13.755 19.1375 13.3679 18.9737C12.9807 18.8098 12.6308 18.57 12.3392 18.2685C12.0163 17.9352 11.8027 17.4591 11.6225 16.9986C11.4298 16.5101 11.2111 15.8559 10.935 15.0352L10.9246 15.0062C10.7996 14.6326 10.7715 14.558 10.7413 14.5011C10.6434 14.3171 10.4921 14.1667 10.3069 14.0695C10.2496 14.0385 10.1746 14.0116 9.79858 13.8863L9.76941 13.876C8.94337 13.6027 8.28503 13.3854 7.79233 13.1939C7.32983 13.0149 6.85066 12.8027 6.51524 12.4818C6.21183 12.1921 5.97044 11.8445 5.80555 11.4598C5.64066 11.0751 5.55566 10.6613 5.55566 10.2431C5.55566 9.825 5.64066 9.41118 5.80555 9.02649C5.97044 8.6418 6.21183 8.29416 6.51524 8.00442C6.85066 7.68357 7.32983 7.4714 7.79233 7.29234C8.44611 7.04994 9.10531 6.82218 9.76941 6.60924L9.79858 6.59889L16.56 4.36019L16.635 4.33535C17.433 4.07142 18.1402 3.83648 18.7048 3.73712Z"
                            fill="white" />
                    </svg>
                </button>
            </div>
            <button @click="toggleNavActive()" class="block md:hidden">
                <svg width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10H36M2 2H36" stroke="#545454" strokeWidth="3" strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>
            </button>
        </nav>
    </header>
    <div ref="contactRef" :class="[
        'fixed inset-0 backdrop-blur-[6px] z-[12] flex items-center justify-center transition-all duration-300 ease-in-out',
        { 'opacity-0 pointer-events-none': !messageModalActive },
        { 'opacity-100 pointer-events-all': messageModalActive }
    ]">
        <section class="bg-primaryBg rounded-[25px] p-4 w-full max-w-[463px] mx-[5%]">
            <button @click="toggleActiveStyle()" class="block ml-auto mb-2">
                <svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="43.0239" height="43.0239" rx="15.7405" fill="#F5F5F5" />
                    <path d="M16.9132 26.0876L21.5008 21.5L26.0885 26.0876M26.0885 16.9124L21.5 21.5L16.9132 16.9124"
                        stroke="#3D403C" strokeWidth="2.625" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <div class="flex items-center gap-4 mb-5">
                <img src="../assets/images/ez-avatar.png" alt="ezra avatar" class="h-[58px]">
                <h3 class="text-lg text-primaryText font-medium">Send Me A Message</h3>
            </div>
            <form @submit.prevent="sendMessage()">
                <div class="grid sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" :class="`${inputStyles}`" required>
                    <input type="text" placeholder="Last Name" :class="`${inputStyles}`" required>
                </div>
                <textarea name="" id="" :class="`${inputStyles} resize-none mt-4 py-4 h-[240px]`"
                    placeholder="Type Your Message" required></textarea>
                <button class="bg-primaryText rounded-[25px] text-white gap-2 px-6 py-3 text-base w-full mt-4">Send
                    Message</button>
            </form>
        </section>
    </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'
const inputStyles = 'bg-[#F8F8F8] text-base rounded-[15px] font-medium px-[17px] py-3 focus:outline-none block w-full'
const contactStyles = 'opacity-100 pointer-events-all'
const navStyles = "flex md:justify-between md:items-center px-[5%] py-4 md:py-2 flex-col absolute right-0 left-0 h-screen md:h-[unset] bg-primaryBg md:bg-transparent md:static md:flex-row transition-all duration-500 ease-in-out"

export default {
    component: {
        RouterLink
    },
    data() {
        return {
            inputStyles,
            contactStyles,
            navStyles
        }
    },
    setup() {
        const contactRef = ref(null)
        const mobileNavRef = ref(null)
        const messageModalActive = ref(false);
        const mobileNavActive = ref(false);
        const toggleActiveStyle = () => {
            messageModalActive.value = !messageModalActive.value;
        };
        const toggleNavActive = () => {
            mobileNavActive.value = !mobileNavActive.value;
        };

        const mobileNavClasses = computed(() => [
            navStyles,
            {
                '-translate-y-[1000px] -top-[120vh] md:translate-y-0': !mobileNavActive.value,
                'translate-y-0 top-0': mobileNavActive.value,
            }
        ]);

        const sendMessage = () => {
        }

        return {
            contactRef,
            toggleActiveStyle,
            messageModalActive,
            sendMessage,
            mobileNavRef,
            toggleNavActive,
            mobileNavClasses,
        }
    }
}
</script>