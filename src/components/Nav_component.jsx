import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../assets/logo.png'
import "./Nav_component.css"
function NavScrollExample() {
  return (
    <Navbar expand="lg" className="nav_component">
      <Container>
        <Navbar.Brand href="#"><img src={img} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0">
            <Nav.Link className='nav_links' href="#action1">Home</Nav.Link>
            <Nav.Link className='nav_links' href="#action1">About us</Nav.Link>
            <Nav.Link className='nav_links' href="#action1">Tornament</Nav.Link>
            <Nav.Link className='nav_links' href="#action1">Store</Nav.Link>
            <Nav.Link className='nav_links' href="#action1">Team</Nav.Link>
            <Nav.Link className='nav_links' href="#action1">FAQ</Nav.Link>
            <Nav.Link className='nav_links' href="#action1">Contact Us</Nav.Link>
          </Nav>
          <div className="nav_icons">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <g clip-path="url(#clip0_11_22)">
    <path d="M14.1837 6.82393C13.5988 3.2224 12.2193 0.693665 10.6138 0.693665C9.00832 0.693665 7.62874 3.2224 7.04384 6.82393H14.1837ZM6.7413 10.6957C6.7413 11.591 6.7897 12.4501 6.87441 13.2768H14.3491C14.4338 12.4501 14.4822 11.591 14.4822 10.6957C14.4822 9.80034 14.4338 8.9413 14.3491 8.11452H6.87441C6.7897 8.9413 6.7413 9.80034 6.7413 10.6957ZM19.8392 6.82393C18.6855 4.08548 16.3499 1.96812 13.4657 1.1131C14.45 2.47628 15.1276 4.52912 15.4826 6.82393H19.8392ZM7.75782 1.1131C4.87766 1.96812 2.53804 4.08548 1.38839 6.82393H5.74494C6.09588 4.52912 6.77357 2.47628 7.75782 1.1131ZM20.2708 8.11452H15.644C15.7287 8.96146 15.7771 9.82857 15.7771 10.6957C15.7771 11.5628 15.7287 12.4299 15.644 13.2768H20.2668C20.4886 12.4501 20.6137 11.591 20.6137 10.6957C20.6137 9.80034 20.4886 8.9413 20.2708 8.11452ZM5.45047 10.6957C5.45047 9.82857 5.49888 8.96146 5.58359 8.11452H0.956773C0.738946 8.9413 0.609863 9.80034 0.609863 10.6957C0.609863 11.591 0.738946 12.4501 0.956773 13.2768H5.57955C5.49888 12.4299 5.45047 11.5628 5.45047 10.6957ZM7.04384 14.5674C7.62874 18.169 9.00832 20.6977 10.6138 20.6977C12.2193 20.6977 13.5988 18.169 14.1837 14.5674H7.04384ZM13.4697 20.2783C16.3499 19.4232 18.6895 17.3059 19.8432 14.5674H15.4867C15.1317 16.8622 14.454 18.9151 13.4697 20.2783ZM1.38839 14.5674C2.54207 17.3059 4.87766 19.4232 7.76186 20.2783C6.7776 18.9151 6.09992 16.8622 5.74494 14.5674H1.38839Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_11_22">
      <rect width="25.0048" height="25" fill="white" transform="translate(0.219238 0.30304)"/>
    </clipPath>
  </defs>
</svg>
<h5><svg className='sign_in' xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
  <g clip-path="url(#clip0_9_8)">
    <path d="M14.4201 7.46485L9.82544 12.0586C9.41521 12.4688 8.70413 12.1816 8.70413 11.5938V8.96875H4.98468C4.62094 8.96875 4.3283 8.67617 4.3283 8.3125V5.6875C4.3283 5.32383 4.62094 5.03125 4.98468 5.03125H8.70413V2.40625C8.70413 1.8211 9.41247 1.53125 9.82544 1.94141L14.4201 6.53516C14.6744 6.79219 14.6744 7.20781 14.4201 7.46485ZM6.07864 11.9219V10.8281C6.07864 10.6477 5.93095 10.5 5.75045 10.5H3.45314C2.96906 10.5 2.57797 10.109 2.57797 9.625V4.375C2.57797 3.89102 2.96906 3.5 3.45314 3.5H5.75045C5.93095 3.5 6.07864 3.35235 6.07864 3.17188V2.07813C6.07864 1.89766 5.93095 1.75 5.75045 1.75H3.45314C2.00364 1.75 0.827637 2.92578 0.827637 4.375V9.625C0.827637 11.0742 2.00364 12.25 3.45314 12.25H5.75045C5.93095 12.25 6.07864 12.1023 6.07864 11.9219Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_9_8">
      <rect width="14.0027" height="14" fill="white" transform="translate(0.827637)"/>
    </clipPath>
  </defs>
</svg> Sign In </h5>
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
  <g clip-path="url(#clip0_11_24)">
    <path d="M21.5506 20.0237L17.2655 15.7394C17.0721 15.546 16.8099 15.4386 16.5349 15.4386H15.8343C17.0205 13.9216 17.7254 12.0137 17.7254 9.93815C17.7254 5.00068 13.724 1 8.78556 1C3.84715 1 -0.154297 5.00068 -0.154297 9.93815C-0.154297 14.8756 3.84715 18.8763 8.78556 18.8763C10.8615 18.8763 12.7698 18.1716 14.287 16.9855V17.686C14.287 17.961 14.3945 18.2231 14.5879 18.4165L18.873 22.7008C19.277 23.1047 19.9303 23.1047 20.33 22.7008L21.5463 21.4847C21.9504 21.0808 21.9504 20.4276 21.5506 20.0237ZM8.78556 15.4386C5.74687 15.4386 3.28411 12.9806 3.28411 9.93815C3.28411 6.90004 5.74257 4.43775 8.78556 4.43775C11.8242 4.43775 14.287 6.89574 14.287 9.93815C14.287 12.9763 11.8285 15.4386 8.78556 15.4386Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_11_24">
      <rect width="25.0048" height="25" fill="white" transform="translate(-0.00476074 0.615723)"/>
    </clipPath>
  </defs>
</svg>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;