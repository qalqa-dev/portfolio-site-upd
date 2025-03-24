import { IProject } from 'types';
import { Directory } from './Directory';

interface ListProps {
  root: IProject;
  level?: number;
  isLast?: boolean;
  parentHasMoreSiblings?: boolean[];
  onClick: (project: IProject | null) => void;
}

export const List = ({
  root,
  level = 0,
  isLast = false,
  parentHasMoreSiblings = [],
  onClick,
}: ListProps) => {
  return (
    <div>
      <div
        className="flex items-center"
        onClick={() => root.repo_href !== 'root' && onClick(root)}
      >
        {parentHasMoreSiblings.map((hasMoreSiblings, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: `${level + 14}px`,
              borderLeft:
                hasMoreSiblings && index === 0 ? '1px solid #c9d1d9' : 'none',
              borderBottom: '1px solid #c9d1d9',
              height: '27px',
              marginTop: '-27px',
              marginRight:
                index === parentHasMoreSiblings.length - 1 ? '5px' : 0,
            }}
          ></div>
        ))}
        <a
          className={`flex gap-1 cursor-pointer ${
            root.repo_href === 'root' ? '' : 'underline'
          }`}
        >
          <Directory color="#cba6f7" />
          {root.name}
        </a>
      </div>
      {root.children?.map((child, index) => (
        <List
          key={child.repo_href}
          root={child}
          level={level + 1}
          isLast={index === root.children!.length - 1}
          parentHasMoreSiblings={[...parentHasMoreSiblings, !isLast]}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
