import { useState } from "react";
import type {FC} from "react";
import { setLocales, t, setLang } from 'translator-client';
import locales from '../../locales/complete.json';

setLocales(locales);
setLang('zh');
const HomePage: FC = () => {
    const [lang,_setLang] = useState<'zh'|'en'>('zh');

    const onClick = () => {
        _setLang(pre => {
            const _lang =  pre ==='zh' ? 'en' : 'zh';
            setLang(_lang);
            return _lang;
        })
    }

    return (
        <div className="flex flex-col mt-90 text-white max-w-[400px] p-10">
            <div className="flex justify-end">
                <div className="flex items-center text-xs mb-10">
                    <div className="w-2xl mr-[5px]">
                        <svg t="1687277604799" className="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="2181" id="mx_n_1687277604800" width="16"
                             height="16">
                            <path
                                d="M512 80C273.6 80 80 273.6 80 512s193.6 432 432 432 432-193.6 432-432S750.4 80 512 80z m366.4 400h-112c-4.8-118.4-36.8-222.4-86.4-294.4C790.4 241.6 867.2 352 878.4 480zM480 148.8V480h-158.4c6.4-164.8 73.6-302.4 158.4-331.2zM480 544v331.2c-84.8-28.8-152-166.4-158.4-331.2H480z m64 331.2V544h158.4c-6.4 164.8-73.6 302.4-158.4 331.2zM544 480V148.8c84.8 28.8 152 166.4 158.4 331.2H544zM342.4 185.6c-49.6 72-81.6 176-86.4 294.4H144c12.8-128 89.6-238.4 198.4-294.4zM145.6 544h112c4.8 118.4 36.8 222.4 86.4 294.4C233.6 782.4 156.8 672 145.6 544z m536 294.4c49.6-72 81.6-176 86.4-294.4h112c-12.8 128-89.6 238.4-198.4 294.4z"
                                fill="#ffffff" p-id="2182"></path>
                        </svg>
                    </div>
                    <div className="flex items-center" onClick={onClick}><a className={`${lang === 'zh' ? 'text-indigo-600' : ''}`} >ZH</a><span className="ml-1 mr-1">/</span><a className={`${lang === 'en' ? 'text-indigo-600' : ''}`}>EN</a></div>
                </div>
            </div>
            <div className="flex items-center justify-between mb-10">
                <div className="flex-initial mr-2 pt-5">
                    <h1 className="font-semibold text-2xl mb-5">Hello,it's me.</h1>
                    <h3 className="font-medium text-xm">My name is ryanwang.</h3>
                </div>
                <div className="flex-initial w-20">
                    <img className="w-full rounded-s-full rounded-e-full" src="https://to-out-use.oss-cn-hangzhou.aliyuncs.com/common/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE%20(1)%202.png" alt="my photo"/>
                </div>
            </div>
            <div className="flex flex-col break-words items-center  justify-center ">
                <div className="leading-7">
                    <p className="mb-5">{
                        t('我是一名拥有 3 年经验的 web 开发者，比较熟悉 react，擅长组件库的开发、治理和维护，精通前端领域所有框架的拼写，擅长各种 API 的阅读和调用。')
                    }</p>
                    <p className="mb-5">{
                        t('我有一个中文的花名（或者是笔名）叫“不换”，曾经的英文名叫 eric，但是后来觉得它太大众了，所以换成了 ryan。')
                    }</p>
                </div>
            </div>
        </div>
    )
};


export default HomePage
