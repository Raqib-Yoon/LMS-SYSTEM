function path(root, sublink) {
  return `${root}${sublink}`;
}
const ROOTS_AUTH = '/auth';
const PATH_ROOT = '/';
const ADMIN_ROOT = '/admin';
//auth
export const PATH_AUTH = {};
// Root Pages
export const PATH_PAGE = {
  landingPage: path(PATH_ROOT, ''),
  CourseDetails: path(PATH_ROOT, '/course-details'),
};

// admin

export const ADMIN_PAGES = {};
