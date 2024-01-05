import React from 'react';
import Box from '@mui/material/Box';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { FileSystem } from '../types/structure';

const renderTree = (items: FileSystem[]) => items.map(item => (
  <TreeItem
    key={item.id}
    nodeId={item.id}
    label={
      <Box display="flex" alignItems="center">
        {item.type === 'folder' ? <FolderIcon /> : <InsertDriveFileIcon />}
        <Box ml={1}>{item.name}</Box>
      </Box>
    }
  >
    {item.children && renderTree(item.children)}
  </TreeItem>
));

export const FileTreeView: React.FC<{ items: FileSystem[] }> = ({ items }) => {

  return (
    <Box sx={{
        minHeight: 180,
        flexGrow: 1,
        maxWidth: 400,
        m: 2
      }}
    >
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {renderTree(items)}
      </TreeView>
    </Box>
  );
};
