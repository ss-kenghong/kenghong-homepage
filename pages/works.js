import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'

import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'
import thumbEvoucher from '../public/images/works/evoucher_eyecatch.png'
import thumbFms from '../public/images/works/fms_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbHRSystem from '../public/images/works/hrsystem_eyecatch.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbIsoftCompanyWebsite from '../public/images/works/isoftcompanywebsite_eyecatch.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbSelfCheckoutKiosk from '../public/images/works/selfcheckoutkiosk_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="hrsystem" title="Human Resource System" thumbnail={thumbHRSystem}>
            Information in Profiles, Payroll, Leave, Attendance, and Claim modules are synced to one another in real-time
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="selfcheckoutkiosk" title="G2i - Self Checkout Kiosk" thumbnail={thumbSelfCheckoutKiosk}>
            A self-checkout kiosk to assist user to purchase goods and services without the assistance of a staff member
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="isoftcompanywebsite" title="iSoft Company Website" thumbnail={thumbIsoftCompanyWebsite}>
            Website of a tech company based in Singapore that builds digital products for&nbsp;businesses
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="evoucher" title="eVoucher" thumbnail={thumbEvoucher}>
            An eVoucher that consist of QR code which can be scanned on the retail outlets to receive a discount
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="fms" title="Fleet Management System" thumbnail={thumbFms}>
            For fleet managers to monitor fleet activities and make decisions about asset management, dispatch and routing
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
