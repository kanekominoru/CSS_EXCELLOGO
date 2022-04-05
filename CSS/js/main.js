const excel = document.querySelector('.excel');
const x = document.querySelector('.x');
const bars = document.querySelectorAll('.x > div');

let height = bars[0].clientHeight;
let width = bars[0].clientWidth;

const saru = () => {
	//アニメーション完了後に実行する内容を記述
    x.style.transform = 'scaleY(.8)';
};

//animationendの場合
excel.addEventListener('animationend', saru);

// mouseleave
excel.addEventListener('mouseleave', ()=>{
    x.style.transform = 'scaleY(1)';
});
