export default `
  @font-face{
    font-family:"emojione";
    src:local(☺),url("../static/fonts/emojione-svg.otf");
    src:local(☺),url("../static/fonts/emojione-svg.otf") format("otf"),url("../static/fonts/emojione-svg.woff") format("woff"),url("../static/fonts/emojione-svg.ttf") format("truetype"),url("../static/fonts/emojieone-svg.woff2") format("woff2");
  }

  .text-emojione {
    font-family: emojione;
  }

  @font-face{
    font-family:"DINNextW01-CondensedUlt";
    src:local(☺),url("../static/fonts/d8b8889b-af70-4f3d-b86e-e0cf674dd069.eot?#iefix");
    src:local(☺),url("../static/fonts/d8b8889b-af70-4f3d-b86e-e0cf674dd069.eot?#iefix") format("eot"),url("../static/fonts/02c54ffd-ffe5-4a1d-baf3-6f2f329e985e.woff") format("woff"),url("../static/fonts/be798c01-2b57-4464-b4f2-8fdda5148346.ttf") format("truetype"),url("../static/fonts/9286c432-d97d-4af1-8608-fbd7b9cb38a0.svg#9286c432-d97d-4af1-8608-fbd7b9cb38a0") format("svg");
  }
  @font-face{
    font-family:"DINNextW01-CondensedLig";
    src:local(☺),url("../static/fonts/c0be55e4-0b40-4646-a643-431ca3639465.eot?#iefix");
    src:local(☺),url("../static/fonts/c0be55e4-0b40-4646-a643-431ca3639465.eot?#iefix") format("eot"),url("../static/fonts/43e82893-3880-47b2-82d6-5b136f8f7477.woff") format("woff"),url("../static/fonts/72f03533-e4e2-48a4-9d34-53d2964eb649.ttf") format("truetype"),url("../static/fonts/c11fd4df-941d-4a17-8af0-be88e02e0042.svg#c11fd4df-941d-4a17-8af0-be88e02e0042") format("svg");
  }
  @font-face{
    font-family:"DINNextRoundedLTW01-Lig";
    src:local(☺),url("../static/fonts/a1de4b41-809e-4f42-8768-ed5a3e9f8f05.eot?#iefix");
    src:local(☺),url("../static/fonts/a1de4b41-809e-4f42-8768-ed5a3e9f8f05.eot?#iefix") format("eot"),url("../static/fonts/a97ce140-d04b-430b-a41b-56ea0794c997.woff") format("woff"),url("../static/fonts/ad44eab7-3b14-4691-8a6d-f6f344f54cb6.ttf") format("truetype"),url("../static/fonts/39f433a1-f35d-4fad-86d1-889cbd83b680.svg#39f433a1-f35d-4fad-86d1-889cbd83b680") format("svg");
  }
  @font-face{
    font-family:"DINNextRoundedLTW01-Med";
    src:local(☺),url("../static/fonts/6b52da97-62cc-435e-9602-a010041892ca.eot?#iefix");
    src:local(☺),url("../static/fonts/6b52da97-62cc-435e-9602-a010041892ca.eot?#iefix") format("eot"),url("../static/fonts/97252acf-16d3-480c-8269-89ea815e4179.woff") format("woff"),url("../static/fonts/fb4860e4-3e80-46aa-92f9-63d03e5db476.ttf") format("truetype"),url("../static/fonts/ed3349df-8331-450b-80a3-d83208eb54eb.svg#ed3349df-8331-450b-80a3-d83208eb54eb") format("svg");
  }
  @font-face{
    font-family:"DINNextRoundedLTW01-Reg";
    src:local(☺),url("../static/fonts/414aac2b-b155-4948-8733-ca83f707714f.eot?#iefix");
    src:local(☺),url("../static/fonts/414aac2b-b155-4948-8733-ca83f707714f.eot?#iefix") format("eot"),url("../static/fonts/b03c5cd2-c6ad-4764-9cab-bf6211f181a7.woff") format("woff"),url("../static/fonts/e06f8fa7-aeda-4810-967e-0fd3d4621441.ttf") format("truetype"),url("../static/fonts/82765f99-353c-4685-8ae4-4f0f0208ccd1.svg#82765f99-353c-4685-8ae4-4f0f0208ccd1") format("svg");
  }
  @font-face{
    font-family:"DINNextRoundedLTW01-Bol";
    src:local(☺),url("../static/fonts/6746d969-4fe6-41c3-9825-bf64ef27f524.eot?#iefix");
    src:local(☺),url("../static/fonts/6746d969-4fe6-41c3-9825-bf64ef27f524.eot?#iefix") format("eot"),url("../static/fonts/52382db1-3de6-473e-b9c0-3cb5e70e80a2.woff") format("woff"),url("../static/fonts/9b4762b5-c629-43c5-aad0-ab5e65206cc6.ttf") format("truetype"),url("../static/fonts/6884fec8-a15c-45b1-86ee-af4f4ff4f5d3.svg#6884fec8-a15c-45b1-86ee-af4f4ff4f5d3") format("svg");
  }

  .text-condensed-ult {
    font-family: DINNextW01-CondensedUlt;
  }

  .text-condensed-lig {
    font-family: DINNextW01-CondensedLig;
  }

  .text-lig {
    font-family: DINNextRoundedLTW01-Lig;
  }

  .text-reg {
    font-family: DINNextRoundedLTW01-Reg;
  }

  .text-med {
    font-family: DINNextRoundedLTW01-Med;
  }

  .text-bol {
    font-family: DINNextRoundedLTW01-Bol;
  }

  a {
    font-family: DINNextRoundedLTW01-Lig;
    font-size: 16px;
    cursor: pointer;
  }

  strong {
    font-family: DINNextRoundedLTW01-reg;
    font-weight: normal;
    font-style: normal;
  }

  .uppercase {
    text-transform: uppercase;
  }
`
