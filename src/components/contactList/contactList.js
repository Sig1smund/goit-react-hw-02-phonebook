import { nanoid } from 'nanoid';
import s from './contactList.module.css';

export default function ContactList({ contacts, container, erase }) {
  const loweredFilter = container.toLowerCase();
  const list = (
    <ul className={s.list__block}>
      {!container
        ? contacts.map(elem => {
            return (
              <li key={nanoid()} className={s.contacts__item}>
                {elem.name}: {elem.number}
                <button type="button" onClick={() => erase(elem.name)}>
                  Delete
                </button>
              </li>
            );
          })
        : contacts
            .filter(elem => elem.name.toLowerCase().includes(loweredFilter))
            .map(elem => {
              return (
                <li key={nanoid()} className={s.contacts__item}>
                  {elem.name}: {elem.number}
                  <button type="button" onClick={() => erase(elem)}>
                    Delete
                  </button>
                </li>
              );
            })}
    </ul>
  );
  return list;
}
