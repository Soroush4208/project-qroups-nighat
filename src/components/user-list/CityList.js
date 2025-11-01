import { El } from '../../utils/el';
import { GetAllCites } from '../getData';

export function CityList() {
  const container = El({
    element: 'div',
    className:
      'w-full h-full flex flex-col justify-center items-center gap-2 border border-white/10 rounded-lg p-10 bg-white',
  });
  const ul = El({
    element: 'ul',
    className: 'w-1/2 flex flex-col justify-center items-center gap-2',
  });
  container.append(ul);
  GetAllCites().then(data => {
    data.map(item => {
      ul.append(
        El({
          element: 'li',
          className: 'w-full flex justify-center items-center border-b',
          innerText: item.name,
        })
      );
    });
  });

  return container;
}
