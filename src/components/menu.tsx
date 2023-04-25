import InputComponent from '@/components/input'

const menuDescriptionInfo = [
    {
        id: 1,
        title: '가게 이름',
        name: 'storeName',
        type: 'text'
    },
    {
        id: 2,
        title: '메뉴 이름',
        name: 'menuName',
        type: 'text'
    },
    {
        id: 3,
        title: '가격',
        name: 'price',
        type: 'number'
    },
    {
        id: 4,
        title: '개수',
        name: 'amount',
        type: 'number'
    },
] 

const MenuComponent = () => {
    return (
    <div className='inputWrapper'>
        {menuDescriptionInfo.map(menuDescription =>
             <InputComponent key={menuDescription.id} name={menuDescription.name} width={100} title={menuDescription.title} type={menuDescription.type} />)
        }
        <style jsx>
        {`
            .inputWrapper {
                display: flex;
                align-items: center;
            }    
        `}
        </style>
    </div>
    )
}

export default MenuComponent;