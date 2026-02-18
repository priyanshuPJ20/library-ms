import { Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

// Auth Pages
import UserLogin from './auth/userLogin';

// Admin Pages
import AdminHomePage from './admin/homePage';
import MaintenanceHomePage from './admin/maintenance/homePage';
import AddMember from './admin/maintenance/membership/addMember';
import UpdateMember from './admin/maintenance/membership/updateMember';
import AddBookMovies from './admin/maintenance/book_movies/addBookMovies';
import UpdateBookMovies from './admin/maintenance/book_movies/updateBookMovies';
import AddUser from './admin/maintenance/user_management/addUser';
import UpdateUser from './admin/maintenance/user_management/updateUser';

// Report Pages
import ReportPage from './reports/reportPage';
import ActiveIssues from './reports/masterlist/activeIssues';
import Books from './reports/masterlist/books';
import Membership from './reports/masterlist/memberShip';
import Movies from './reports/masterlist/movies';
import OverDueReturn from './reports/masterlist/overDueReturn';
import PendingIssueRequest from './reports/masterlist/pendingIssueRequest';

// User Pages
import UserHomePage from './user/homePage';

// Import example components
import {
  MemberListExample,
  StatsDashboardExample,
  BooksAndMoviesExample,
  TransactionsExample,
  BorrowingRulesExample,
  AdminMenusExample,
  LibraryInfoExample
} from './dataExamples';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<UserLogin />} />
      <Route path="/userLogin" element={<UserLogin />} />

      {/* Admin Routes */}
      <Route path="/admin/homePage" element={<AdminHomePage />} />
      <Route path="/admin/maintenance" element={<MaintenanceHomePage />} />

      {/* Membership Routes */}
      <Route path="/admin/maintenance/add-member" element={<AddMember />} />
      <Route path="/admin/maintenance/update-member/:id" element={<UpdateMember />} />

      {/* Book/Movie Routes */}
      <Route path="/admin/maintenance/add-book-movie" element={<AddBookMovies />} />
      <Route path="/admin/maintenance/update-book-movie/:id" element={<UpdateBookMovies />} />

      {/* User Management Routes */}
      <Route path="/admin/user-management/add-user" element={<AddUser />} />
      <Route path="/admin/user-management/update-user/:id" element={<UpdateUser />} />

      {/* User Routes */}
      <Route path="/user/homePage" element={<UserHomePage />} />

      {/* Report Routes */}
      <Route path="/admin/reports" element={<ReportPage />} />
      <Route path="/examples/active-issues" element={<ActiveIssues />} />
      <Route path="/examples/books" element={<Books />} />
      <Route path="/examples/membership" element={<Membership />} />
      <Route path="/examples/movies" element={<Movies />} />
      <Route path="/examples/overdue" element={<OverDueReturn />} />
      <Route path="/examples/pending" element={<PendingIssueRequest />} />

      {/* Example Routes */}
      <Route path="/examples/members" element={<MemberListExample />} />
      <Route path="/examples/stats" element={<StatsDashboardExample />} />
      <Route path="/examples/books-movies" element={<BooksAndMoviesExample />} />
      <Route path="/examples/transactions" element={<TransactionsExample />} />
      <Route path="/examples/borrowing-rules" element={<BorrowingRulesExample />} />
      <Route path="/examples/admin-menus" element={<AdminMenusExample />} />
      <Route path="/examples/library-info" element={<LibraryInfoExample />} />

      {/* Catch all - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;