import { snackbar } from 'mdui/functions/snackbar';
import Typewriter from 'typewriter-effect/dist/core';
import floating from "floating.js";

export default function init() {

    new Typewriter("#typewriter", {loop: true})
        .typeString('生意兴隆，')
        .typeString('财源广进')
        .pauseFor(1000)
        .deleteChars(4)
        .pauseFor(500)
        .typeString('开业大吉')
        .pauseFor(1000)
        .deleteChars(4)
        .pauseFor(500)
        .typeString('天天开心')
        .pauseFor(1000)
        .deleteChars(4)
        .pauseFor(1000)
        .deleteChars(4)
        .start();

    let click = 0;
    document.getElementById('cardBtn')
        .addEventListener('click', function() {
            click++;
            if (click === 1) {
                snackbar({message: '点了一下，再点一下 <(￣︶￣)>'});
            } else if (click === 2) {
                snackbar({message: '有种再点一下 o(｀ω´ )o'});
            } else if (click === 100) {
                snackbar({message: '成就达成！太闲了(≧▽≦)'});
                floating({
                    content: "😇",
                    number: 2,
                    duration: 12
                });
                floating({
                    content: "🎈",
                    number: 7,
                    duration: 20
                });
                floating({
                    content: "🥰",
                    number: 6,
                    duration: 14
                });
                floating({
                    content: "😋",
                    number: 4,
                    duration: 16
                });
                floating({
                    content: "🍓",
                    number: 6,
                    duration: 8
                });
                floating({
                    content: "🍉",
                    number: 3,
                    duration: 10
                });
                floating({
                    content: "🎉",
                    number: 5,
                    duration: 6
                });
                floating({
                    content: "🐤",
                    number: 2,
                    duration: 6
                });
                floating({
                    content: "🦐",
                    number: 1,
                    duration: 7
                });
                floating({});
            } else if (click < 60) {
                snackbar({message: '୧(๑•̀⌄•́๑)૭✧加油！(' + click + "/100)" });
            } else if (click < 80) {
                snackbar({message: '୧(๑•̀⌄•́๑)૭✧快了！(' + click + "/100)" });
            } else if (click < 100) {
                snackbar({message: '୧(๑•̀⌄•́๑)૭✧就差一点！(' + click + "/100)" });
            } else if (click < 1000) {
                snackbar({message: '别点我惹，点上方开始联系我们吧 (* ~︿~) '});
            }
        });
}