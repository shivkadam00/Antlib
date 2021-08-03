import React from "react";
import { Collapse } from 'antd';
import { Button } from 'antd';

const { Panel } = Collapse;

function AppFaq() {
    return (
        <div className="block faqBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Frequently Asked Questions</h2>
                    <p>Quidem reiciendis iure, aperiam blanditiis. Alias esse, nam, ea quam</p>
                </div>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="How to setup the theme? " key="1">
                        <p>Ut per tempor latine fuisset, cu quod posidonium vix. Mei cu erant bonorum, te ius vide maiorum hendrerit. In alii instructior vix, vis et elit maluisset, usu recusabo atomorum ut. Nibh diceret dolores vix et, id omnis adhuc maiestatis vim, ei mel legendos mnesarchum argumentum. Semper nusquam urbanitas sea te.</p>
                    </Panel>
                    <Panel header="Can I change plan or cancel at any time?" key="2">
                        <p>Postea ceteros corrumpit ius te, eos epicuri intellegebat consequuntur et. Sint quot suscipiantur ea nam. Nam pericula evertitur ut, per et quod nostro, autem augue id has. Virtute epicurei quo te, pri et novum essent senserit.</p>
                    </Panel>
                    <Panel header="How to access through cloud?" key="3">
                        <p>Eu veritus ancillae suavitate per, cum in appellantur efficiantur. Eum cu clita ponderum lobortis, usu dicat exerci et, eam alii oblique interesset ea. Suas quidam volumus id eam, id populo euripidis temporibus pri. At eum quas putent iriure, fugit tritani sed ad. Per ad magna possim aliquam, est aeque exerci verear an, qui cu modus audire detraxit. Duo ne nostro rationibus, nam mutat omittam evertitur ad, meliore gubergren voluptatum at mel.</p>
                    </Panel>
                </Collapse>
                <div className="quickSupport">
                    <h2>Want quick support?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur velit necessitatibus praesentium aliquid eos in neque recusandae, incidunt esse dolore voluptatum nesciunt quod soluta consequuntur voluptatibus ab excepturi nobis! Porro!</p>
                    <Button type="primary" size="large"><i class="fas fa-envelope"></i>Email</Button>
                </div>
            </div>
        </div>
    );
}
export default AppFaq;

