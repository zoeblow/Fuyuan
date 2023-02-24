/*
 * @Description:
 * @Author: wangfuyuan
 * @Email: wangfuyuan@nnuo.com
 * @Date: 2023-02-07 11:25:01
 * @LastEditors: wangfuyuan
 * @LastEditTime: 2023-02-24 10:35:01
 * @FilePath: \Fuyuan\src\@lekoarts\gatsby-theme-cara\components\footer.tsx
 */
/** @jsx jsx */
import { Box, jsx } from "theme-ui"

const Footer = () => {

  return (
    <Box as="footer" variant="footer">
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    </Box>
  )
}

export default Footer
