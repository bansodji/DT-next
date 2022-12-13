import { Container, Spacer } from '@nextui-org/react'
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import ArrowRightTwoToneIcon from '@mui/icons-material/ArrowRightTwoTone';

export default function Dropdown() {
  return (
    <Container>
      <h2>Dropdown</h2>
      <Spacer y={1} />

      <div class="f-dropdown">
        <a class="f-dropbtn d-flex">Dropdown <ArrowDropDownIcon /></a>
        <div class="f-dropdown-content">
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </div>
      </div>

      <div class="r-dropdown">
        <a class="r-dropbtn d-flex">Dropdown <ChevronRightIcon /></a>
        <div class="r-dropdown-content">
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </div>
      </div>

      <div class="f-dropdown">
        <a class="f-dropbtn d-flex">Dropdown <ArrowDropDownIcon /></a>
        <div class="f-dropdown-content">
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li href="#" class="r-dropdown">
            <div class="r-dropdown">
              <a class="r-dropbtn d-flex">Button<ChevronRightIcon /></a>
              <div class="r-dropdown-content">
                {/* <li><a href="">Link</a></li> */}
              </div>
            </div>
          </li>
        </div>
      </div>

    </Container>

  )
}
