import { IProject } from 'types';
import { Directory } from './Directory';

interface ListProps {
  root: IProject;
  level?: number;
  isLast?: boolean;
  parentHasMoreSiblings?: boolean[];
  onHover: (project: IProject | null) => void;
}

export const List = ({
  root,
  level = 0,
  isLast = false,
  parentHasMoreSiblings = [],
  onHover,
}: ListProps) => {
  return (
    <div>
      <div
        className="flex items-center"
        onMouseEnter={() =>
          root.href !== '#' && root.href !== '#' && onHover(root)
        }
        onMouseLeave={() => onHover(null)}
      >
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
        <a
          className={`flex gap-1  ${root.href === '#' ? '' : 'underline'}`}
          href={root.href}
        >
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
          onHover={onHover}
        />
      ))}
    </div>
  );
};
