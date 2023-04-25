//1차, 2차, 3차 같이 여러번의 술자리를 나타내는 영어 표현
//hop : 방방 뛴다, bar : 술 집
//직역 시 여러 술집을 방방 뛰면서 돌아다닌다, 의역 : 2차, 3차, ...를 간다
import InputComponent from '@/components/input'
import ButtonComponent from '@/components/button'
import MenuComponent from '@/components/menu'
import { useState } from 'react';

const BarHoppingComponent = () => {
    let [menuSize, setmenuSize] = useState(1);
    const menuList = () => {
        const menuListInfo = [];
        for(let i=0; i<menuSize; i++) {
            menuListInfo.push(<MenuComponent key={i} />);
        }
        return menuListInfo;
    }
    const increaseMenuSize = () => {
        setmenuSize(menuSize + 1);
    }

    return (
        <div className='mainWrapper'>
            <h2>기본 정보</h2>
            <div className='inputWrapper'>
                <InputComponent name='title' title='제목' type="text" />
                <InputComponent name='date' title='모임 날짜' type="date" />
            </div>
            <div className='inputWrapper'>
                <InputComponent name='participation' title='참여 인원' type="text" />
                <InputComponent name='notParticipation' title='미참여 인원' type="text" />
            </div>
            <br />
            <h2>메뉴 정보</h2>
            <ButtonComponent onClick={increaseMenuSize} text="메뉴 추가" />
            <div className='menuWrapper'>
                {menuList()}
            </div>

            <style jsx> 
            {`
                .mainWrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .inputWrapper {
                    display: flex;
                    align-items: center;
                }
            `}
            </style>
      </div>
    )
}

export default BarHoppingComponent;
