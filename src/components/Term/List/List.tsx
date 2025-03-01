import { Directory } from './Directory';

export interface IProject {
  name: string;
  href: string;
  children?: IProject[];
}

interface ListProps {
  root: IProject;
  level?: number;
  isLast?: boolean;
  parentHasMoreSiblings?: boolean[];
}

export const List = ({
  root,
  level = 0,
  isLast = false,
  parentHasMoreSiblings = [],
}: ListProps) => {
  return (
    <div>
      <div className="flex items-center">
        {parentHasMoreSiblings.map((hasMoreSiblings, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: `${level + 14}px`,
              borderLeft:
                hasMoreSiblings && index == 0 ? '1px solid #c9d1d9' : 'none',
              borderBottom: '1px solid #c9d1d9',
              height: '27px',
              marginTop: '-27px',
              marginRight:
                index === parentHasMoreSiblings.length - 1 ? '5px' : 0,
            }}
          ></div>
        ))}
        <a className="flex gap-1 underline" href={root.href}>
          <Directory color="#cba6f7" />
          {root.name}
        </a>
      </div>
      {root.children?.map((child, index) => (
        <List
          key={child.href}
          root={child}
          level={level + 1}
          isLast={index === root.children!.length - 1}
          parentHasMoreSiblings={[...parentHasMoreSiblings, !isLast]}
        />
      ))}
    </div>
  );
};
