import type { AnyObject, ComponentItemType } from '@dxsixpc/generator';
import { MonacoEditor, Render, Title } from '@dxsixpc/generator';
import { dataToString, stringToData } from '@dxsixpc/utils';
import { useEffect, useState } from 'react';
import { pageData } from './mock';
import { EditorSpace, RenderSpace, SpaceWrapper } from './Styled';

// 渲染器
const RenderPanel: React.FC = () => {
  const [value, setValue] = useState<ComponentItemType[]>(pageData);

  const onChange = (value?: string) => {
    const newValueData = stringToData(value);
    // 是正确的数组，再更新数据
    if (Array.isArray(newValueData)) {
      setValue(newValueData);
    }
  };

  const onValuesChange = (changeValue?: AnyObject, values?: AnyObject) => {
    console.log('changeValue: ', changeValue);
    console.log('values: ', values);
  };

  useEffect(() => {
    const sidebar = document.querySelectorAll('.dumi-default-sidebar')[0] as HTMLElement;
    sidebar.style.display = 'none';
    return () => {
      sidebar.style.display = 'block';
    };
  }, []);

  return (
    <SpaceWrapper align='start'>
      <EditorSpace direction='vertical'>
        <Title>代码编辑器</Title>
        <MonacoEditor
          defaultValue={dataToString(value, null, 2)}
          height={500}
          width={500}
          language='json'
          onChange={onChange}
        />
      </EditorSpace>
      <RenderSpace direction='vertical'>
        <Title>实时预览渲染效果</Title>
        <Render componentItems={value} onChange={onValuesChange} />
      </RenderSpace>
    </SpaceWrapper>
  );
};

export default RenderPanel;
