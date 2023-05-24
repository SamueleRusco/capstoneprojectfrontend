import { BorderBottom } from "@mui/icons-material";
import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from "mdb-react-ui-kit"

const Footer = () => {
    return( <MDBFooter  className='text-center text-lg-start ' style={{
      
          backgroundColor:"#7c7061",
          BorderBottom:"1px, solid, white"
         }}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{
          backgroundColor:"#7c7061",
          BorderBottom:"1px, solid, white"
         }}>
        <div className='me-5 d-none d-lg-block'
         >
          <span>Get connected with us on social networks:</span>
        </div>        
      </section>

      <section style={{
          backgroundColor:"#7c7061",
          BorderBottom:"1px, solid, white"
         }}>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
          

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='https://open.spotify.com/user/31kjw2awjzxglnxw7y42geuj4cwe' className='text-reset'>
                  Spotify
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Itunes
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>)
}

export default Footer;