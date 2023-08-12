import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';


export const MenuItem = [
    {
      title: <span><FontAwesomeIcon icon={faNewspaper}/>&nbsp;&nbsp;오늘의 금사빠 뉴스레터</span>,
      path: '#', /* '/Newsletter', */
      cName: 'dropdown-link'
    },
    {
      title: <span><FontAwesomeIcon icon={faCommentsDollar}/>&nbsp;&nbsp;금사빠 기초금융지식</span>,
      path: '#',
      cName: 'dropdown-link'
    },
    {
      title: <span><FontAwesomeIcon icon={faBookmark}/>&nbsp;&nbsp;내가 구독한 뉴스레터</span>,
      path: '#',
      cName: 'dropdown-link'
    }
  ];
  