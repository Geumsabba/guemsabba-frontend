import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';


const MenuItem2 = [
    {
      title: <span><FontAwesomeIcon icon={faMoneyBill}/>&nbsp;&nbsp;지원금 전체보기</span>,
      path: '#',
      cName: 'dropdown-link'
    },
    {
      title: <span><FontAwesomeIcon icon={faSackDollar}/>&nbsp;&nbsp;지원가능한 지원금</span>,
      path: '#',
      cName: 'dropdown-link'
    },
  ];
  
  export default MenuItem2;