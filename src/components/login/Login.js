import { El } from '../../utils/el';

export function LoginPage() {
  function handleLogin() {
    let user = document.getElementById('username').value;
    let email = document.getElementById('email').value;

    let isSignedIn = JSON.parse(localStorage.getItem('user'));
    console.log(isSignedIn);
    // {user: 's.rostami', email: 'soroush.r80@gmail.com'}
    if (isSignedIn.user === user && isSignedIn.email === email) {
      alert('in user qhablan sign in karde');
    } else {
      if (user && email) {
        localStorage.setItem('user', JSON.stringify({ user, email }));
      } else {
        alert('Please enter username and email');
      }
    }
  }
  return El({
    element: 'div',
    className: 'w-full h-screen flex justify-center items-center ',
    children: [
      El({
        element: 'div',
        className:
          'w-full h-full md:w-1/2 md:h-1/2 bg-black/2 backdrop-blur-lg flex flex-col justify-center items-center gap-2 border border-white/10 rounded-lg p-10',
        children: [
          El({
            element: 'div',
            className: 'flex flex-col justify-center items-start gap-2 w-full',
            children: [
              El({
                element: 'label',
                innerText: 'Username',
                className: 'text-white',
              }),
              El({
                element: 'input',
                id: 'username',
                className:
                  'p-2 w-full text-white outline-none rounded-md border border-white/10',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex flex-col justify-center items-start gap-2 w-full',
            children: [
              El({
                element: 'label',
                innerText: 'Email',
                className: 'text-white',
              }),
              El({
                element: 'input',
                id: 'email',
                className:
                  'p-2 text-white outline-none w-full rounded-md border border-white/10',
              }),
            ],
          }),
          El({
            element: 'button',
            type: 'submit',
            className: 'p-2 w-full mt-3 rounded-md bg-white text-black',
            innerText: 'Login',
            eventListener: [{ event: 'click', callback: handleLogin }],
          }),
        ],
      }),
    ],
  });
}
