import { El } from '../../utils/el';
import { GetAllCites } from '../getData';

export function CityList() {
  let dataRse = GetAllCites().then(res => res);
  console.log(dataRse);

  return El({
    element: 'div',
    className:
      'w-full h-full flex flex-col justify-center items-center gap-2 border border-white/10 rounded-lg p-10 bg-white',
    children: [
      El({
        element: 'ul',
        className: 'w-1/2 flex flex-col justify-center items-center gap-2',
        children: [
          dataRse
            .forEach(item => {
              El({
                element: 'li',
                className: 'w-full flex justify-center items-center border-b',
                innerText: item.name,
              });
            })
            .join(''),
        ],
      }),
    ],
  });
}
