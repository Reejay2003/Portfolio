import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"


const Education = () => {
  return (
    <ScrollArea className="h-[290px] w-full  border-0 ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Level</TableHead>
            <TableHead>Institute</TableHead>
            <TableHead>Country</TableHead>
            <TableHead className="text-right">CGPA</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">B. Tech</TableCell>
            <TableCell>Delhi Technological University</TableCell>
            <TableCell>India</TableCell>
            <TableCell className="text-right">9.187/10 (till 3rd sem)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">12th</TableCell>
            <TableCell>Sunbeam Academy Samneghat</TableCell>
            <TableCell>India</TableCell>
            <TableCell className="text-right">91.4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">10th</TableCell>
            <TableCell>Nightingale International Secondary School</TableCell>
            <TableCell>Nepal</TableCell>
            <TableCell className="text-right">3.7/4</TableCell>
          </TableRow>      
        </TableBody>
     </Table>

    </ScrollArea>
  )
}

export default Education