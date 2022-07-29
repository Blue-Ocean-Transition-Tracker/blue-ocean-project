import {React} from 'react';
import Overview from './Overview';
import Tasks from './Tasks';
import StudentHeader from './StudentHeader';
import ChatModal from '../../Chat/ChatModal';

export const Dash = () => {

  return (
    <div>
      <h1>dash</h1>
      <StudentHeader />
      <Overview  />
      <Tasks />
      <ChatModal />
    </div>
  )
}