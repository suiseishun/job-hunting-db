const companyData = [
    {
        name: `ABeam Consulting`,
        industry: `コンサルティング`,
        category: `DX・ITコンサルティング`,
        url: `https://www.abeam.com/jp/ja/recruit/newgrad/`,
        salary: `790(575)`,
        employees: 8816,
        memo: `ERPパッケージ(特にSAP)の導入・活用支援では、国内トップクラスのシェアと知見を誇る。
外資系に多い「Up or Out」ではなく、社員を中長期的に育成する文化がある。`
    },
    {
        name: `Adobe`,
        industry: `ITサービス・SIer`,
        category: `SaaS・業務効率化`,
        url: `https://www.adobe.com/jp/careers/university.html`,
        salary: `1417(675)`,
        employees: '700',
        memo: `「Creative Cloud」を展開しており、圧倒的なシェアを誇る
著作権を侵害しないクリーンな学習データを用いた生成AIを全製品に統合
リモートワークや有給休暇の取得が非常に柔軟`
    },
    {
        name: `Advanced Media`,
        industry: `ITサービス・SIer`,
        category: `AI・データサイエンス`,
        url: `https://www.advanced-media.co.jp/recruit/newgraduate/`,
        salary: "625(435)",
        employees: 239,
        memo: `独自の音声認識エンジン「AmiVoice」を保有しており、国内の音声認識市場で圧倒的なシェアを誇る
現場のDXに直結するSaaS型サービスを多角的に展開
東証グローズ上場企業でAIベンチャーの中でも安定した収益構造を持つ`
    },
    {
        name: `ADVANTEST`,
        industry: `メーカー`,
        category: `半導体・製造装置`,
        url: `https://www2.advantest.com/external/careers/`,
        salary: `1027(525)`,
        employees: 7000,
        memo: `半導体が正しく動作するかを検査する「テスタ」で世界トップシェア(米テラダインと市場を二分)
世界の主要な半導体メーカーを顧客に持ち、組織や開発体制もグローバル化されている
AI向けGPUやHBMの検査に不可欠な技術を持つ
テスタだけではなく、電子顕微鏡、データ解析プラットフォームなども行なっている`
    },
    {
        name: `ADNAVI`,
        industry: `広告
ITサービス・SIer`,
        category: `広告・デジタルマーケティング`,
        url: `https://www.adways.net/adnavi/recruit/index.html`,
        salary: `590(504)`,
        employees: 1060,
        memo: `独自のアドプラットフォームやAI・自動化ツールを内製
若手のうちから大きなプロダクションや責任あるポジションを任せる文化や、部門間移動(ジョブローテーション)が活発
在宅勤務やフレックスを組み合わせた柔軟な働き方`
    },
    {
        name: `AGC`,
        industry: `メーカー`,
        category: `ハードウェア・精密機器
ヘルスケア・メディカル`,
        url: `https://www.agc.com/recruiting/`,
        salary: `882(450)`,
        employees: 8000,
        memo: `世界トップクラスのシェアを誇る製品を数多く展開している
素材開発にAIを活用したり、社内生成AIを導入している
福利厚生が厚く、若手にも大きな裁量が与えられる`
    },
    {
        name: `AGS`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.ags.co.jp/saiyou/`,
        salary: `605(435)`,
        employees: 1070,
        memo: `りそな銀行と埼玉県内を中心とした自治体向けソリューションで高いシェアを誇る
システム開発だけではなく、自社で堅牢なデータセンターを保持、運営している
金融や公共といったミッションクリティカルなシステムの保守、運用が多いため、収益が非常に安定している
卑近金属年数が20年を超え、離職率が極めて低い(研究制度も充実している)`
    },
    {
        name: `Aidemy`,
        industry: `Web・ネットサービス
ITサービス・SIer
教育`,
        category: `教育・HR・人材`,
        url: `https://aidemy.co.jp/recruit/`,
        salary: `600(475)`,
        employees: 126,
        memo: `個人向けの「Aidemy」や法人向けの「Aidemy Business」が主流(リスキリング)
企業のAIプロジェクトのテーマ選定からPoC、実運用までを支援するコンサルティングも行う
アクセンチュアの子会社となり、より大規模で高度なAI実装案件への関与が期待されている`
    },
    {
        name: `All About`,
        industry: `Web・ネットサービス\n広告`,
        category: `SNS・メディア・コンテンツ`,
        url: `https://corp.allabout.co.jp/recruit/fresh/index`,
        salary: `555(430)`,
        employees: 127,
        memo: `情報の信頼性を収益の柱にする稀有なビジネスモデル
日本最大級のサンプリングサイトを運営している
個の力を重視する文化があり、社員の副業を積極的に推奨している`
    },
    {
        name: `ALPSALPINE`,
        industry: `メーカー`,
        category: `産業用ロボット・FA`,
        url: `https://recruit.alpsalpine.com/j/recruit/newgraduate/`,
        salary: `620(425)`,
        employees: 27300,
        memo: `次世代自動車に不可欠なHMI技術や、車掲載の通信、制御モジュールで世界トップクラスのシェアを誇る
スイッチやセンサーなどの食感技術において、世界的な実績がある
海外売上高比率が高く、Appleなどの巨大テック企業や、主要な自動車メーカーと直接の顧客としている
有給休暇の消化率が高く、多目的休暇やチャージ休暇などもある`
    },
    {
        name: `ANDPAD`,
        industry: `Web・ネットサービス\nITサービス・SIer`,
        category: `建設・不動産DX`,
        url: `https://andpad.co.jp/recruit/`,
        salary: `590(442)`,
        employees: 896,
        memo: `建築現場の業務を一元管理しており、利用者数、ユーザー数ともに国内シェア1位を誇る
DXが遅れている建築市場をターゲットにしており、市場のポテンシャルが非常に高い
現実主義を徹底している`
    },
    {
        name: `Appir`,
        industry: `Web・ネットサービス\nITサービス・SIer`,
        category: `AI・データサイエンス`,
        url: `https://www.appier.com/ja-jp/about/career`,
        salary: `725(550)`,
        employees: 708,
        memo: `AIを中核に据えており、ユーザーの勝利行動の予測、広告運用の自動化、クーポン発行などのROIを最大化させるツール群を展開
エージェント型AIへとアップデートとして、過去最高業績を更新し続けている
AI分野のトップカンファレンスで技術力の高さが最大の競争優位性
社内公用語は英語となる場合も多い、多国籍ベンチャー`
    },
    {
        name: `Apple Japan`,
        industry: `メーカー\nITサービス・SIer`,
        category: `ハードウェア・精密機器`,
        url: `https://www.apple.com/careers/jp/work-at-apple/students.html`,
        salary: `600(850)`,
        employees: 4000,
        memo: `デバイス内処理によるプライバシー保護を武器に、Geminiとの提携によるクラウド連携も開始
独自チップからOS、アプリ、クラウドサービスまで自社で完結
徹底した秘密保持と職人気質が全社員に浸透
週3日出社のハイブリットワークが定着しており、外資系テック企業の中でもトップレベルの福利厚生`
    },
    {
        name: `ARTERIA`,
        industry: `通信・ネットワークインフラ`,
        category: `通信キャリア・ISP`,
        url: `https://www.arteria-net.com/recruit/newgrads/`,
        salary: `730(435)`,
        employees: 1130,
        memo: `全国規模で自社の光ファイバー網を保有
全戸一括型マンションインターネット市場において、圧倒的な国内シェアを誇る
丸紅グループの商流とセコムのセキュリティノウハウを融合
コアタイムのないフルフレック制度、在宅勤務、服装自由化が浸透`
    },
    {
        name: `ASKUL`,
        industry: `小売\nWeb・ネットサービス\n物流`,
        category: `Webプラットフォーム・EC`,
        url: `https://www.askul.co.jp/kaisya/saiyo/new/?nextUri=/kaisya/saiyo/new/&sc_e_complete=1`,
        salary: `740(435)`,
        employees: 3700,
        memo: `小売の枠を超えたSolutiopn領域を明確な新規事業として確立
AIエージェントが顧客の発注・管理をサポートする仕組みを中核に備える
テクノロジー活用に対して極めて積極的`
    },
    {
        name: `atama+`,
        industry: `Web・ネットサービス\nITサービス・SIer\n教育`,
        category: `教育・HR・人材`,
        url: `https://corp.atama.plus/recruit/`,
        salary: `675(510)`,
        employees: 150,
        memo: `生徒一人ひとりの根本原因、忘却度などをAIがリアルタイムで解析
全国400以上の教室に導入
AI教材の提供に加え、自社運営の塾やフランチャイズを展開
非常に合理的かつフラットな組織文化`
    },
    {
        name: `amazon`,
        industry: `ITサービス・SIer\nWeb・ネットサービス\n物流・流通インフラ`,
        category: `Webプラットフォーム・EC`,
        url: `https://www.amazon.jobs/content/jp/career-programs/university`,
        salary: `1075(575)`,
        employees: 12000,
        memo: `AWSにおいて独自のフロンティアモデルやあIエージェント機能が本格普及
GoogleやMetaに次ぐ広告の巨塔
視覚支援AIの導入、ドライバーの作業短縮や倉庫内の完全ロボット化により物流コストの削減と配送スピードを追求
16項目のリーダーシップ理念が全社員の共通言語で、成果と行動指針に基づいてRSUが付与される外資系らしい実力主義`
    },
    {
        name: `Bandai Namco`,
        industry: `Web・ネットサービス`,
        category: `エンタメ・ゲーム・VOD`,
        url: `https://www.bandainamcoent.co.jp/job/grad/`,
        salary: `1078(457)`,
        employees: 11100,
        memo: `映像作品から、プラモデル、スマホゲーム、アミューズメント施設までをグループないで完結
北米、アジア、欧州での売り上げ比率が急上昇
自分で働く場所や時間を選択できる制度の導入や、副業公認などの柔軟な職場環境`
    },
    {
        name: `BASE`,
        industry: `Web・ネットサービス\nITサービス・SIer`,
        category: `Webプラットフォーム・EC`,
        url: `https://www.basenet.co.jp/recruit/info/newgraduates/`,
        salary: `725(525)`,
        employees: 230,
        memo: `誰でも簡単いネットショップが開設できる「BASE」を展開
ECカードのみならず、決済サービスや購入者向けショッピングアプリを運営
フルリモートを前提とした柔軟な職場環境`
    },
    {
        name: `baycurrent`,
        industry: `コンサルティング\nITサービス・SIer`,
        category: `DX・ITコンサルティング`,
        url: `https://www.baycurrent.co.jp/careers/newgraduate/`,
        salary: `1435(650)`,
        employees: 5900,
        memo: `特定の業界や職種に固定されない組織体制が特徴
戦略策定だけでなく、現場でのシステム実装や定着化までを支援
外資ではないので、日本企業の習慣に合わせた柔軟な提案や高額な報酬設定を自社で迅速に決定できる
コンサル業界では珍しい離職率10%以下を維持`
    },
    {
        name: `BBS`,
        industry: `コンサルティング\nITサービス・SIer`,
        category: `DX・ITコンサルティング`,
        url: `https://recruit.bbs.co.jp/recruit/graduate/`,
        salary: `675(440)`,
        employees: 1730,
        memo: `財務、会計分野での高度なコンサルティング
コンサルティング、システム構築、BPOをワンストップで提供
複数の専門性を掛け合わせた人材育成に注力(会計に強いSE、ITがわかるコンサルティング)
東証プライム上場企業で、隠れたホワイト企業と評される`
    },
    {
        name: `BIGLOBE`,
        industry: `通信・ネットワークインフラ\nITサービス・SIer`,
        category: `通信キャリア・ISP`,
        url: `https://www.biglobe.co.jp/recruit_fresh/`,
        salary: `685(475)`,
        employees: 700,
        memo: `光回線やモバイルの通信事業を基盤としつつ、webメディアや社会解決型の新規事業への挑戦を強化
KDDIの100%子会社で。大規模なネットワークやサーバー群をじせで設計、開発、運用している
フルフレックス制度やリモートワークが標準化されている`
    },
    {
        name: `BIPROGY`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.biprogy.com/recruit/recruiting/`,
        salary: `878(435)`,
        employees: 8360,
        memo: `ハード、ソフトの販売から、Saas、Paasや顧客との共創による事業へとシフト
エネルギーマネジメントやAIを加重した需要予測、リテールDXにおいて高い専門性を発揮
平均勤続年数が20.8年と非常に長く、定着率が高い
フルフレックス制、テレワークなど福利厚生が極めて手厚い`
    },
    {
        name: `Brain Pad`,
        industry: `ITサービス・SIer\nコンサルティング`,
        category: `AI・データサイエンス`,
        url: `https://www.brainpad.co.jp/recruit/entry/new/`,
        salary: `730(460)`,
        employees: 600,
        memo: `生成AIと自社プロダクトを加えたBPasモデルへの転換を加速
伊藤忠商事との資本業務提携を軸に、共同で生成AI研究ラボを運営
クライアント
企業が自らデータを使いこなせるよう「人材育成」や「組織設計」までを含めたサプライチェーンを構築
スキルアップに使える補助制度や、住宅手当などのバックアップあり`
    },
    {
        name: `brother`,
        industry: `メーカー`,
        category: `ハードウェア・精密機器`,
        url: `https://www.brother.co.jp/corporate/bil/recruit/portal/index.aspx`,
        salary: '775(375)',
        employees: 42800,
        memo: `海外売上比率が高く、特に欧米のSOHO市場ではプリンターのシェアで圧倒的な存在感を誇る
環境負荷低減と高耐久を両立させた製品を次々と投入`
    },
    {
        name: `Canon`,
        industry: `メーカー`,
        category: `ハードウェア・精密機器`,
        url: `https://global.canon/ja/employ/new/internship/index.html`,
        salary: `850(485)`,
        employees: 169000,
        memo: `AIによる試作レスや、製造ラインの完全無人化を追求
ナノインプリント技術が世界的に注目されている
年功序列を廃したグレード制が徹底されており、若手でも成果を出せば、主任・管理職へ昇格可能
米国特許取得件数は長年世界トップクラス`
    },
    {
        name: `Canon IT Solutions`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.i-note.jp/canon-its/contents/index.html`,
        salary: `730(475)`,
        employees: 4730,
        memo: `製造業向けの「数理最適化」やセキュリティ分野の「ESET」はぎょうかトップクラスの信頼を誇る
人材確保と育成に極めて積極的、エンジニアとして長期的にキャリアを形成できる環境
テレワークと出社のハイブリットワークが定着`
    },
    {
        name: `CAPCOM`,
        industry: `Web・ネットサービス`,
        category: `エンタメ・ゲーム・VOD`,
        url: `https://www.capcom.co.jp/recruit/graduate/`,
        salary: `865(475)`,
        employees: 3560,
        memo: `1つのヒット作を複数方面へ展開し、長期間にわたって収益を上げ続ける「ストック型ビジネス」を展開
自社開発のゲームエンジン「RE ENGINE」を継続アップデート
席あ200以上の国と地域へ直接アプローチ`
    },
    {
        name: `Capgemini`,
        industry: `コンサルティング\nITサービス・SIer`,
        category: `DX・ITコンサルティング`,
        url: `https://www.capgemini.com/jp-jp/careers/`,
        salary: `825(500)`,
        employees: 354700,
        memo: `ヨーロッパらしい「個の尊重」と「多様性」を重視するフラットな社風が特徴
業務プロセス全体をAIで再定義する「インテリジェント・オペレーション」を強みにもつ
社員が生成AIツールのトレーニングに参加、終了`
    },
    {
        name: `CEC`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.cec-ltd.co.jp/employment/`,
        salary: `628(420)`,
        employees: 2470,
        memo: `自動車産業向けの基幹システム開発やIoTソリューションを強みにもつ
官公庁向けの大型案件を受注している
認証プリントシステムなどの自社セキュリティ製品を展開
マルチプラットフォームエオ「つなぐ」力を重視`
    },
    {
        name: `chuden CTI`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.cti.co.jp/recruit/fresh/`,
        salary: `655(440)`,
        employees: 1340,
        memo: `中部電力のIT戦略を担う
解析サービスに強みを持つのが特徴
グループ内案件が売上の多くを占める
平均勤続年数が17.1年と長く、安定・ホワイト企業として知られている`
    },
    {
        name: `CIJ`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://recruit.cij.co.jp/newgrads/`,
        salary: `580(440)`,
        employees: 1680,
        memo: `官公庁や地方自治体などの公共系システムで豊富な実績を持つ
ミッションクリティカルな開発案件が多く、抜群の安定性を持つ
ソフトウェアの基盤系の技術力と、多種多様なビジネス知識を併せ持つ
大手企業とも長年にわたる強固なパトナーシップを持つ`
    },
    {
        name: `CISCO`,
        industry: `メーカー`,
        category: `クラウド・インフラ・セキュリティ`,
        url: `https://www.cisco.com/c/ja_jp/about/careers/new-graduate.html`,
        salary: `1137(520)`,
        employees: 75000,
        memo: `世界最大のネットワーク機器メーカー。ハードからソフト・サブスクへ転換中。
新卒初年度から年俸制500万超＋業績賞認。営業職の平均は1400万超と極めて高額。
「ハイブリッドワーク」の先駆者であり、自由でフラットな外資系文化が特徴。
グローバルな研修制度や、最新のAI・ネットワーク技術に触れられる環境。`
    },
    {
        name: `coconala`,
        industry: `Web・ネットサービス`,
        category: `Webプラットフォーム・EC`,
        url: `https://coconala.co.jp/recruit/`,
        salary: `660(400)`,
        employees: 180,
        memo: `個人のスキルを売り買いする日本最大級のマーケットプレイスを運営。
初任給は月33.3万円(年収400万相当)と高水準。エンジニアの中央値はさらに高い。
NTTドコモとの提携により、集客力とFinTech領域での成長を加速させている。
「一人ひとりが自分のストーリーを生きていく世の中をつくる」という強いミッション性。`
    },
    {
        name: `cognizant`,
        industry: `コンサルティング`,
        category: `DX・ITコンサルティング`,
        url: `https://careers.cognizant.com/apj-jp/`,
        salary: `850(550)`,
        employees: 340000,
        memo: `世界有数のITコンサル。日本法人は外資と日系の「ハイブリッド」な社風。
新卒は年俸制550万〜。グローバルプロジェクトへの参画機会が豊富。
生成AIやIoT、クラウドを駆使した製造・金融・ライフサイエンスのDXに強み。
海外研修やナレッジ共有が活発で、若手のうちから市場価値を高めやすい環境。`
    },
    {
        name: `COMSYS`,
        industry: `ITサービス・SIer`,
        category: `通信キャリア・ISP`,
        url: `https://www.comsys.co.jp/recruit/recruit/newgraduate/`,
        salary: `740(430)`,
        employees: 16000,
        memo: `通信建設業界の国内最大手。NTT向け等の通信インフラ構築が収益の柱。
10年以上赤字なし。30歳平均年収600万超と、インフラ企業らしい抜群の安定性。
近年はソフトウェア開発やデータセンター運用などのITソリューション事業を強化中。
住宅手当や資格取得支援が非常に手厚く、腰を据えて長く働けるホワイトな社風。`
    },
    {
        name: `COMTURE`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）\nクラウド・インフラ・セキュリティ`,
        url: `https://www.comture.com/recruitment/newgrad/recruit/`,
        salary: `600(430)`,
        employees: 1606,
        memo: `「お客様には感動を、社員には夢を」がスローガンの高成長SIer。
MicrosoftやAWS、Salesforce等のクラウドプラットフォームの導入支援に圧倒的強み。
2026年3月期も過去最高益を見込む。資格取得一時金が非常に充実しており学習意欲が高い。
10時間分の固定残業代を含むが、実残業は徹底管理されておりWLBも良好。`
    },
    {
        name: `cookpad`,
        industry: `Web・ネットサービス`,
        category: `SNS・メディア・コンテンツ`,
        url: `https://cookpad.careers/`,
        salary: `890(513)`,
        employees: 250,
        memo: `「毎日の料理を楽しみにする」をミッションに掲げる、食のインフラ企業。
新卒初任給は年500万超と高水準。エンジニアの技術水準が極めて高いことで有名。
近年は買い物支援サービス「クックパッドマート」や海外事業の拡大に注力。
フルフレックス制や充実した開発環境があり、自律的な働き方を重視する文化。`
    },
    {
        name: `CORE`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.core.co.jp/recruitment/freshman`,
        salary: `671(410)`,
        employees: 1250,
        memo: `創業50年超の独立系SIer。車載・医療・宇宙等の「組込制御系」に強いのが特徴。
「コアの技術」を武器に、全国拠点での地域密着型SIサービスを多角展開。
平均年収は670万台と安定しており、若手からベテランまで教育制度が充実。
福利厚生として保養所や持株会制度があり、堅実でアットホームな社風。`
    },
    {
        name: `COVER`,
        industry: `Web・ネットサービス`,
        category: `エンタメ・ゲーム・VOD`,
        url: `https://cover-corp.com/recruit`,
        salary: `584(380)`,
        employees: 500,
        memo: `世界的なVTuberグループ「ホロライブプロダクション」を運営。
メタバース「ホロアース」の自社開発など、エンタメ×テックに強い。
2023年に東証グロース上場。平均年齢30代前半と若く、活気ある社風。
独自の配信システムや3D技術など、技術力の高さがクリエイティブを支える。`
    },
    {
        name: `Creema`,
        industry: `Web・ネットサービス`,
        category: `Webプラットフォーム・EC`,
        url: `https://www.creema.co.jp/recruit/`,
        salary: `550(360)`,
        employees: 100,
        memo: `日本最大級のハンドメイドマーケットプレイス「Creema」を運営。
ECにとどまらず、クラフトイベント開催やクラウドファンディングなど多角支援。
平均年収は550万〜。クリエイティブな世界を愛する熱量の高い社員が集まる。
少数精鋭で意思決定が速く、若手でも大きな裁量を持ってサービス成長を牽引できる。`
    },
    {
        name: `CRESCO`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）\nAI・データサイエンス`,
        url: `https://recruit.cresco.co.jp/ja/info/fresh.html`,
        salary: `638(420)`,
        employees: 2800,
        memo: `先端技術に強い独立系SIer。金融・流通・製造の基幹システムで豊富な実績。
独自開発の「AI顔認証」やクラウド移行技術に強み。2026年度も採用枠を拡大中。
平均残業20h以内、有休消化率も高く「働きやすさ」に定評があるホワイト企業。
資格取得時に最大数十万円の奨励金が出るなど、エンジニアの成長を強力支援。`
    },
    {
        name: `CROWDWORKS`,
        industry: `Web・ネットサービス`,
        category: `Webプラットフォーム・EC\n教育・HR・人材`,
        url: `https://crowdworks.co.jp/careers/new_graduate`,
        salary: `643(430)`,
        employees: 300,
        memo: `「“働く”を通して人々に笑顔を」を掲げる国内最大級のクラウドソーシング。
麻布台ヒルズに本社を構え、複業・フリーランス・法人を繋ぐ多様なプラットフォームを展開。
新卒月給30万〜(年430万相当)。リスキリング制度や書籍購入補助が充実。
副業OKで、自分らしいキャリアを模索できる「新しい働き方」の体現企業。`
    },
    {
        name: `CTC`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）\nクラウド・インフラ・セキュリティ`,
        url: `https://www.ctc-g.co.jp/recruit/newgrads/`,
        salary: `941(430)`,
        employees: 9916,
        memo: `伊藤忠グループのSIer最大手。マルチベンダーとして高度な技術力を持つ。
2026年度は初任給を大幅増(大卒29.5万〜)。院卒は31.5万とトップ級の待遇。
クラウド、AI、5G等の先端技術に強み。30歳前後で年収900万超も珍しくない。
「スライドワーク」や充実した福利厚生など、SIer業界屈指のホワイト企業。`
    },
    {
        name: `Cyber Agent`,
        industry: `Web・ネットサービス`,
        category: `広告・デジタルマーケティング\nSNS・メディア・コンテンツ\nエンタメ・ゲーム・VOD`,
        url: `https://www.cyberagent.co.jp/careers/students/`,
        salary: `882(504)`,
        employees: 7300,
        memo: `ネット広告・メディア(ABEMA)・ゲームの3本柱。21世紀を代表する企業を目指す。
新卒一律で年俸504万(月42万)からスタート。エンジニアは最高720万〜の提示も。
「21世紀のリーダー」を育てる独自の抜擢人事と、挑戦を称賛するカルチャー。
渋谷を中心とした住宅補助「Honeymoon S」等、若手の生活を支える福利厚生が充実。`
    },
    {
        name: `cybozu`,
        industry: `Web・ネットサービス`,
        category: `SaaS・業務効率化`,
        url: `https://cybozu.co.jp/recruit/`,
        salary: `650(448)`,
        employees: 1000,
        memo: `「kintone」を筆頭に国内シェア首位のグループウェアを展開するSaaS企業。
初任給は月32万〜(年約450万)。職種やスキルに応じた柔軟な評価・報酬体系。
「100人100通りの働き方」を掲げ、副業自由、リモート・時短勤務が標準の社風。
チームワークを重視し、情報の公明正大さと自律的なキャリア形成を支援する文化。`
    },
    {
        name: `Cygames`,
        industry: `Web・ネットサービス`,
        category: `エンタメ・ゲーム・VOD`,
        url: `https://fresh.cygames.co.jp/`,
        salary: `632(445)`,
        employees: 3000,
        memo: `「最高のコンテンツを作る会社」を目指す、サイバーエージェント傘下のゲーム大手。
初任給は大卒月28.7万〜。業績連動インセンティブを含めた1年目年収は約450万想定。
『ウマ娘』『グラブル』等の圧倒的なIP力と、クオリティへの異常な拘りが特徴。
自社内に最新のモーションキャプチャースタジオ等を完備し、開発環境は世界最高峰。`
    },
    {
        name: `Deloitte`,
        industry: `コンサルティング`,
        category: `DX・ITコンサルティング`,
        url: `https://www.deloitte.com/jp/ja/careers/students.html`,
        salary: `955(580)`,
        employees: 4800,
        memo: `世界最大級のプロフェッショナルファーム。戦略から実行までワンストップで支援。
コンサルタント職は年俸制580万前後からスタート。成果主義で昇給スピードが速い。
国内最大規模のファームとして、あらゆる業界の最上流案件に携わることが可能。
近年は働き方改革を徹底しており、WLBを重視しつつ専門性を磨ける環境。`
    },
    {
        name: `Demaecan`,
        industry: `Web・ネットサービス`,
        category: `Webプラットフォーム・EC\n物流・流通インフラ`,
        url: `https://recruit.demae-can.co.jp/`,
        salary: `662(400)`,
        employees: 350,
        memo: `国内最大級のフードデリバリーを運営。LINEヤフーグループとしてのシナジーを強化。
中途入社の年収レンジは600〜1000万超。実力主義で若手の抜擢も多い。
デリバリーから「物流インフラ」への進化を目指し、AI配送システム等に積極投資。
メガベンチャー的なスピード感があり、泥臭く現場からサービスをグロースさせる環境。`
    },
    {
        name: `DeNA`,
        industry: `Web・ネットサービス`,
        category: `エンタメ・ゲーム・VOD\nAI・データサイエンス\nヘルスケア・メディカル`,
        url: `https://student.dena.com/`,
        salary: `883(500)`,
        employees: 2500,
        memo: `「Delighting」をミッションに多角経営。ゲーム、ライブ、自動運転、医療と広範。
新卒初任給は年500万〜。AIエキスパート枠等はスキルに応じて1000万超も可能。
「論理的思考」と「コトに向かう」姿勢を重視。学歴不問の実力主義が徹底。
副業や社内異動制度（シェイクハンズ）が活発で、キャリアの多角化を推奨。`
    },
    {
        name: `DENSO`,
        industry: `メーカー`,
        category: `自動車・モビリティ・重工業`,
        url: `https://careers.denso.com/graduate/`,
        salary: `820(410)`,
        employees: 160000,
        memo: `世界2位の自動車部品メーカー。トヨタグループ。電動化・自動運転で世界をリード。
大卒初任給25.4万。30代で年収700〜900万、管理職で1000万超がボリュームゾーン。
「総智・総力」を掲げる開発型企業。海外売上比率が極めて高く、グローバルな活躍。
手厚い社宅、保養所、研修など福利厚生は国内トップクラス。安定と挑戦を両立。`
    },
    {
        name: `DENTSU DIGITAL`,
        industry: `広告`,
        category: `広告・デジタルマーケティング`,
        url: `https://dd.dentsudigital.co.jp/recruit/newrec/`,
        salary: `1508(430)`,
        employees: 2500,
        memo: `国内最大級のデジタルマーケ会社。電通グループ。戦略策定から広告運用まで一貫支援。
初任給は月35.5万(固定残業込)と広告業界トップ級。平均年収は非常に高い水準。
最先端のデータ分析や生成AI活用に強み。電通本隊と連携した大規模案件が豊富。
自由でクリエイティブな社風。「人」を重視し、最先端を走り続けたい若手に人気。`
    },
    {
        name: `DISCO`,
        industry: `メーカー`,
        category: `半導体・製造装置`,
        url: `https://www.disco.co.jp/recruit/`,
        salary: `1672(400)`,
        employees: 5000,
        memo: `半導体切断装置(ダイサ)で世界シェア約7〜8割を誇る超高収益・高年収企業。
2025年実績で平均年収1672万。ボーナスが非常に多く、業績に連動して爆発的に増える。
独自の社内通貨「Will」を導入した自律型管理。社内オークションで仕事を選ぶ仕組み。
圧倒的な製品競争力を背景に、独自の経営哲学「PIM」で世界一を目指す特異な企業。`
    },
    {
        name: `DMM.com`,
        industry: `Web・ネットサービス`,
        category: `エンタメ・ゲーム・VOD`,
        url: `https://dmm.snar.jp/`,
        salary: `560(400)`,
        employees: 2000,
        memo: `動画配信、FX、ゲーム、AIなど60以上の事業を展開する「何でも屋」。
2026年度も年俸制を継続.初任給想定は約400万、エンジニア等の専門職はさらに高額。
圧倒的な事業スピードと、新規事業への挑戦を称賛する「実力主義」の社風が特徴。
福利厚生としてDMMサービスのポイント付与や、麻布台ヒルズ等の最新オフィス環境。`
    },
    {
        name: `Double Standard`,
        industry: `ITサービス・SIer`,
        category: `AI・データサイエンス`,
        url: `https://double-std.recruitment.jp/`,
        salary: `591(396)`,
        employees: 80,
        memo: `独自のアルゴリズムでビッグデータの生成・統合・利活用を支援する少数精鋭集団。
新卒は一律年俸396万(月33万)から。平均年齢35歳前後で、高い営業利益率を誇る。
企業のDXにおける「データの質」を改善する技術に強みがあり、大手企業が主要顧客。
一人ひとりの裁量が大きく、最先端のデータサイエンスとビジネスの繋ぎ込みを学べる。`
    },
    {
        name: `DTS`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.dts.co.jp/recruit/fresh/index.html`,
        salary: `650(420)`,
        employees: 3878,
        memo: `金融・通信向けに強い老舗の独立系SIer。東証プライム上場。
2026年度は初任給を月25万円(大卒)に引き上げ。安定した給与体系と福利厚生が強み。
銀行・保険の基幹システムからクラウド、AI活用まで幅広く手がけ、安定感抜群。
資格取得支援や研修制度が非常に充実しており、未経験からでもITプロを目指せる環境。`
    },
    {
        name: `dynabook`,
        industry: `メーカー`,
        category: `ハードウェア・精密機器`,
        url: `https://dynabook.com/about-us/recruit.html`,
        salary: `500(390)`,
        employees: 2200,
        memo: `世界初のノートPCを開発したパイオニア。現在はシャープ(鴻海)グループ。
PC販売だけでなく、セキュリティやエッジコンピューティング等のITソリューションへ転換中。
電気連合の共済等、大手メーカー系ならではの福利厚生が手厚く、安定して働ける。
「Hybrid PC Lab.」での開発など、モノづくりとサービスの両面に携わることが可能。`
    },
    {
        name: `dyson`,
        industry: `メーカー`,
        category: `ハードウェア・精密機器`,
        url: `https://www.dyson.co.jp/inside-dyson/recruitment`,
        salary: `720(500)`,
        employees: 14000,
        memo: `「問題を解決する」を掲げる英国発の技術革新企業。
日本法人の新卒は年収500万前後から.成果次第でインセンティブの幅が大きい。
吸引力、空調、ヘアケアに加え、ロボティクスやAIへの投資を加速。
極めてフラットで「失敗を恐れない」文化。グローバルな環境で英語を活かして働ける。`
    },
    {
        name: `EPSON`,
        industry: `メーカー`,
        category: `ハードウェア・精密機器`,
        url: `https://www.recruit.epson.jp/newgraduate/requirements.html`,
        salary: `794(410)`,
        employees: 74464,
        memo: `インクジェットプリンターや産業ロボットで世界をリードする精密機器大手。
2026年度初任給は25.3万(大卒)〜28.0万(院卒)に引き上げ。長野県内では屈指の高待遇。
「省・小・精」の技術を核に、環境負荷を低減する循環型経済への貢献を加速。
平均勤続年数が長く、信州の豊かな自然の中で高度な技術開発に没頭できる「優良ホワイト」。`
    },
    {
        name: `EXCITE`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.excite-software.co.jp/job_offer/newgraduate`,
        salary: `584(380)`,
        employees: 150,
        memo: `大手エキサイトHD傘下として、Webシステムやスマホアプリの受託開発に強み。
平均年収は約580万.新卒も年俸制をベースに成果を重視する傾向。
メディア運営で培ったUI/UX知見を活かした開発が評価され、大手企業の指名案件が多い。
若手への教育とOJTが丁寧で、モダンな技術スタックを用いた開発経験を積める。`
    },
    {
        name: `EXEO`,
        industry: `ITサービス・SIer`,
        category: `通信キャリア・ISP`,
        url: `https://www.exeo.co.jp/recruit/recruit/`,
        salary: `776(450)`,
        employees: 3851,
        memo: `通信建設の国内大手。NTT向け等の通信インフラから環境・エネルギーまで広範。
2年目から賞与等が満額となり年収450万を突破。30代前半で700万到達も珍しくない。
5G、データセンター、再エネ設備など「社会の血管」を支えるインフラ力が強み。
有休取得率が高く、現場手当や住宅手当が非常に手厚い。経営の安定性は業界随一。`
    },
    {
        name: `EYSC`,
        industry: `コンサルティング`,
        category: `DX・ITコンサルティング`,
        url: `https://www.eysc.jp/recruit/new_graduate/entry/new/`,
        salary: `911(550)`,
        employees: 3000,
        memo: `Big4の一角。戦略から実装まで「Building a better working world」を掲げる。
新卒1年目は年俸550万(月45.9万)。役職昇進ごとに数百万単位で年収が跳ね上がる。
2026年現在はAI実装コンサルに注力.多様性を尊重する「People-first」な社風。
完全に実力主義だが、カウンセラー制度等のサポート体制があり若手の離職防止に注力。`
    },
    {
        name: `FANCOMI`,
        industry: `広告`,
        category: `広告・デジタルマーケティング`,
        url: `https://www.fancs.com/recruit/index.htm`,
        salary: `530(487)`,
        employees: 412,
        memo: `国内最大級のアフィリエイトサービス「A8.net」を運営.東証プライム上場。
初任給はセールス職31.2万、エンジニア職35万と高く、1年目から年収500万近くも。
成果報酬型広告を核に、自社プロダクトの改善と広告主・メディアの最大化を支援。
平均年齢が若くフラット。データ分析を元にした論理的なマーケティング能力が身につく。`
    },
    {
        name: `FANUC`,
        industry: `メーカー`,
        category: `産業用ロボット・FA`,
        url: `https://www.fanuc.co.jp/ja/employ/recruit/`,
        salary: `1164(480)`,
        employees: 9431,
        memo: `産業用ロボット世界4強の一角。黄色いロボットで知られる超高収益企業。
平均年収1,000万超が定位置.初任給も27万円(大卒)〜28.9万円(修士)へ引き上げ。
富士山麓の本社に広大な工場・研究所・社宅を構える、要塞のような独特の企業文化。
業績連動賞与の比率が極めて高く、日本の製造業における最高水準の待遇を誇る。`
    },
    {
        name: `freebit`,
        industry: `通信・ネットワークインフラ`,
        category: `通信キャリア・ISP`,
        url: `https://freebit.com/recruit/newgrad/`,
        salary: `601(400)`,
        employees: 1045,
        memo: `「Being the NET Framework」を掲げ、ISP支援やモバイル(MVNE)を展開。
新卒初任給は月33.3万円(年400万相当)から.Web3や5G領域への投資を加速中。
独自の特許技術を多数保有する技術志向の企業で、新規事業の立ち上げが非常に活発。
若手にも積極的に責任あるポジションを任せる、スピード感のある社風。`
    },
    {
        name: `freee`,
        industry: `Web・ネットサービス`,
        category: `SaaS・業務効率化`,
        url: `https://jobs.freee.co.jp/`,
        salary: `716(450)`,
        employees: 1100,
        memo: `「スモールビジネスを、世界の主役に。」クラウド会計国内シェアトップクラス。
2026年度は利益フェーズへ移行し、平均年収も年々上昇中.新卒は一律年俸制。
マジ価値(本質的価値)を追求する独自の文化があり、フラットでオープンな組織。
大崎の新オフィスは「村」をコンセプトにした独創的な空間で、多様な働き方を支援。`
    },
    {
        name: `FRONTEO`,
        industry: `ITサービス・SIer`,
        category: `AI・データサイエンス`,
        url: `https://recruit.fronteo.com/`,
        salary: `650(450)`,
        employees: 350,
        memo: `独自開発のAI「KIBIT」を核に、証拠解析(eディスカバリ)や創薬支援を展開。
新卒は年俸450万〜.高度なデータサイエンスと専門知識の融合を強みとする。
2026年はAIによる経済安全保障解析など、国策に近い領域での事業が急成長。
「人間の判断を支えるAI」という哲学に共感する、プロ意識の高いメンバーが集まる。`
    },
    {
        name: `FUJIFILM`,
        industry: `メーカー`,
        category: `ヘルスケア・メディカル`,
        url: `https://careers.fujifilm.com/graduates/`,
        salary: `1032(460)`,
        employees: 73900,
        memo: `写真から医療・バイオ・半導体材料へ.多角化経営の世界的成功モデル。
初任給は28万円(大卒)〜30.7万円(修士)へ大幅増.1年目から年収450万超も。
「NEVER STOP」の精神で、常に変化し続ける強い実行力と高い利益率を維持。
福利厚生は国内トップ級.グローバルに展開する各事業部で専門性を磨ける環境。`
    },
    {
        name: `FUJISOFT`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.fsi.co.jp/recruit/recruit/info6.html`,
        salary: `640(400)`,
        employees: 16000,
        memo: `国内最大級の独立系SIer。ロボット(パルロ)やAI開発、5G領域に強み。
新卒月収は24万円〜.年間約300〜500名を採用する、若手育成に極めて意欲的な企業。
特定のメーカーに縛られない柔軟な技術提案が可能.技術研究発表会など学びの場が多い。
フレックス制や在宅勤務、充実した社内研修制度があり、着実にエンジニアとして成長できる。`
    },
    {
        name: `Fujitsu`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://fujitsu.recruiting.jp.fujitsu.com/recruit/entry/`,
        salary: `929(480)`,
        employees: 124000,
        memo: `国内シェア首位のITサービス・SIer企業.ハードからサービス「Fujitsu Uvance」へ転換。
2026年度初任給は担う職責に応じ28.4万〜31.5万.ジョブ型雇用を本格導入。
平均年収は900万超.AI(Fujitsu Kozuchi)や量子コンピュータ等の世界最先端技術に強み。
テレワークが標準の「Work Life Shift」を推進.グローバルに通用するキャリアを形成可能。`
    },
    {
        name: `GA TECHNOLOGIES`,
        industry: `Web・ネットサービス`,
        category: `建設・不動産DX`,
        url: `https://newgrads-recruit.ga-tech.co.jp/`,
        salary: `610(500)`,
        employees: 1200,
        memo: `「テクノロジー×イノベーションで、人々に感動を。」不動産DXの急成長企業。
新卒初任給は年500万(月約41万)から.実力主義で、若手でも早期に1000万到達が可能。
ネット不動産「RENOSY」を主軸に、AIによる物件査定や契約のオンライン化を推進。
体育会系的な熱量とモダンな技術文化が融合.2026年は海外M&Aによる世界展開を加速。`
    },
    {
        name: `Geekly`,
        industry: `人材サービス`,
        category: `教育・HR・人材`,
        url: `https://www.geekly.co.jp/recruit/new-graduate/`,
        salary: `485(420)`,
        employees: 250,
        memo: `IT・Web・ゲーム業界に特化した、データドリブンな人材紹介サービス。
新卒初任給は31万円(年420万以上)。成果に応じたインセンティブで年収を伸ばせる。
「マッチングの科学」を掲げ、独自のデータ基盤を元にした高精度な提案が強み。
20代の成長環境として評価が高く、論理的思考と圧倒的な当事者意識が身につく社風。`
    },
    {
        name: `GMO INTERNET`,
        industry: `Web・ネットサービス`,
        category: `クラウド・インフラ・セキュリティ`,
        url: `https://gmoap-recruit.snar.jp/jobboard/detail.aspx?id=LxShIVWg3MACut5iNcPerw`,
        salary: `1003(710)`,
        employees: 7400,
        memo: `「すべての人にインターネット」。インフラから金融、AIまで多角展開する巨大グループ。
「新卒年収710万円プログラム」など、No.1人材獲得のため圧倒的な待遇を提示。
24時間無料のカフェ、託児所、ジムを完備した最高峰のオフィス環境「GMO Yours」。
スピード感のある文化。2026年はグループ全体で「AI活用No.1」を掲げ、全業務をDX化。`
    },
    {
        name: `Goodpatch`,
        industry: `Web・ネットサービス`,
        category: `DX・ITコンサルティング`,
        url: `https://careers.goodpatch.com/newgraduate/`,
        salary: `605(420)`,
        employees: 250,
        memo: `デザインの力でビジネスを加速させる、国内初のデザイン会社上場企業。
新卒は年俸制420万前後から。デザイナー、エンジニア、ビジネス職がチームで活動。
「ハートを揺さぶるデザインで世界を前進させる」をミッションにUI/UXの先端を走る。
フルフレックス制やリモートワークが標準。創造性を重視する極めてフラットな組織。`
    },
    {
        name: `Google`,
        industry: `Web・ネットサービス`,
        category: `Webプラットフォーム・EC`,
        url: `https://www.google.com/about/careers/applications/students?hl=ja_jp`,
        salary: `1600(850)`,
        employees: 190000,
        memo: `世界最高のテック企業の一つ。2026年は「Gemini」を核としたAIファーストへ転換。
新卒(Software Engineer)は1000万超も。日本法人の平均も1600万〜と世界最高水準。
「TGIF」等のオープンな対話、無料のカフェなど、最高峰の福利厚生とオフィス環境。
世界中から集まる超優秀な人材と、地球規模のインパクトを与える開発に携われる。`
    },
    {
        name: `GREE`,
        industry: `Web・ネットサービス`,
        category: `エンタメ・ゲーム・VOD`,
        url: `https://hd.gree.net/jp/ja/recruit/graduate/`,
        salary: `812(450)`,
        employees: 1600,
        memo: `世界初のモバイルソーシャルゲームを確立。現在はメタバース「REALITY」に注力。
新卒初任給は月37.5万〜(年450万想定)。エンジニアや専門職はさらに個別に高額提示。
2026年度はAI活用によるゲーム開発効率化と、メタバースのグローバル展開を加速。
「ロジカル・客観的・変化に前向き」な社風。六本木ヒルズ本社での自由な働き方。`
    },
    {
        name: `Gunosy`,
        industry: `Web・ネットサービス`,
        category: `SNS・メディア・コンテンツ`,
        url: `https://gunosy.co.jp/recruit/requirements/internship/`,
        salary: `720(450)`,
        employees: 150,
        memo: `「情報を世界中に最適に届ける」ニュースアプリ大手。独自のアルゴリズムに強み。
新卒初任給は年450万相当。データサイエンスとマーケティングの融合を強みとする。
2026年はインド市場でのFinTech事業が急成長中。海外投資案件にも若手が関われる。
数値に基づいた意思決定を徹底する文化。少数精鋭でエンジニアの裁量が非常に大きい。`
    },
    {
        name: `Hatena`,
        industry: `Web・ネットサービス`,
        category: `SNS・メディア・コンテンツ`,
        url: `https://hatena.co.jp/recruit/fresh`,
        salary: `680(430)`,
        employees: 220,
        memo: `「はてなブログ」や法人向け「Mackerel」を展開。技術者コミュニティの旗手。
新卒初任給は年約430万相当。京都と東京の2拠点体制で、独自のエンジニア文化を維持。
技術に対する深い敬意があり、技術書執筆者も多数在籍。オープンソースへの貢献も活発。
私服勤務、フレックス制、ランチ補助など、クリエイティブを支える福利厚生が充実。`
    },
    {
        name: `HENNGE`,
        industry: `Web・ネットサービス`,
        category: `クラウド・インフラ・セキュリティ`,
        url: `https://recruit.hennge.com/new-graduates/`,
        salary: `700(460)`,
        employees: 280,
        memo: `クラウド認証の「HENNGE One」を展開。国内SaaS界のセキュリティリーダー。
社内公用語は英語。世界中からメンバーが集まる多様性あふれる環境。
新卒は年俸460万〜。海外の最新技術トレンドをいち早く日本市場へ届ける強み。
「変化を楽しもう」という姿勢を重視。渋谷のモダンなオフィスで自由な働き方を推進。`
    },
    {
        name: `HIS Mobile`,
        industry: `通信・ネットワークインフラ`,
        category: `通信キャリア・ISP`,
        url: `https://his-mobile.com/summary/recruit`,
        salary: `480(330)`,
        employees: 50,
        memo: `旅行大手HISと日本通信の合弁。海外旅行者向けや格安SIMサービスに強み。
親会社の安定性と、ベンチャー的な機動力を持つ。2026年はeSIM事業で成長。
平均年収は約480万。1年目は年収330万前後。地域密着型の店舗展開も強化中。
旅行×ITという独自の立ち位置で、通信のコストダウンを通じて自由な旅を支える。`
    },
    {
        name: `HITACHI`,
        industry: `メーカー`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.hitachi.co.jp/recruit/internship/index.html`,
        salary: `916(480)`,
        employees: 320000,
        memo: `日本を代表する巨大企業。IT、エネルギー、モビリティを柱とする社会イノベーション。
2026年度初任給は担う職責に応じ28.4万〜31.5万。ジョブ型雇用を全社展開。
ITプラットフォーム「Lumada」を核に、OT×ITの融合で世界の課題を解決する。
住宅手当や年金、研修、社宅など国内最高峰の福利厚生。世界中をフィールドに働ける。`
    },
    {
        name: `Hitachi Solutions`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.hitachi-solutions.co.jp/recruit/newgraduates/`,
        salary: `730(440)`,
        employees: 4800,
        memo: `日立グループのIT事業中核。セキュリティやワークスタイル変革のソリューションに強み。
2026年度初任給は27.0万(大卒)〜29.4万(院卒)。日立本隊に準ずる充実した待遇。
「ホワイト500」常連。テレワークの徹底や有休取得推奨など、極めて働きやすい環境。
コンサルティングから保守まで、業界を問わず幅広いDXプロジェクトをリード可能。`
    },
    {
        name: `HOYA`,
        industry: `メーカー`,
        category: `ハードウェア・精密機器`,
        url: `https://www.hoya.com/recruit/`,
        salary: `844(410)`,
        employees: 36000,
        memo: `メガネレンズ、コンタクトから半導体部品、内視鏡まで。超高収益な光学大手。
独自の事業部制(ポートフォリオ経営)を徹底し、各分野で世界シェアNo.1を複数保有。
2026年度も半導体市場の成長に伴い業績好調。実力主義で成果に応じた報酬。
各事業部に大きな裁量があり、専門性を深めつつグローバルな事業運営を学べる。`
    },
    {
        name: `HP`,
        industry: `メーカー`,
        category: `ハードウェア・精密機器`,
        url: `https://jobs.hp.com/ja/`,
        salary: `850(520)`,
        employees: 58000,
        memo: `世界最大級のPC・プリンターメーカー。日本法人は国内PCシェアトップクラス。
新卒は年俸制500万〜。営業職はインセンティブ比率が高く、若手でも成果次第で大台を狙える。
「東京生産」にこだわり、短納期・高品質を実現。近年はAI搭載PC(AIPC)への転換を加速。
自由でフラット、かつ「自律」を重んじる社風。ハイブリッドワークが標準化されている。`
    },
    {
        name: `HPE`,
        industry: `ITサービス・SIer`,
        category: `クラウド・インフラ・セキュリティ`,
        url: `https://careers.hpe.com/us/en/locations-japan`,
        salary: `915(550)`,
        employees: 60000,
        memo: `HPから分離した、サーバー・ネットワーク等のエンタープライズITインフラの巨人。
新卒は年俸制550万〜。クラウドサービス「HPE GreenLake」へのビジネスシフトが成功。
ハードウェアだけでなく、最先端のエッジ・クラウド、AIインフラのコンサルに強み。
「エッジ・トゥ・クラウド」の先駆者。研修制度が非常に手厚く、技術・営業のプロを育てる。`
    },
    {
        name: `HubSpot`,
        industry: `Web・ネットサービス`,
        category: `SaaS・業務効率化`,
        url: `https://www.hubspot.jp/work-in-tokyo`,
        salary: `950(500)`,
        employees: 7600,
        memo: `「インバウンドマーケティング」を提唱した、世界的人気のCRMプラットフォーム。
新卒は年俸制500万〜。成果と文化への適合を重視する独自の評価体系を持つ。
「Culture Code」を軸にした透明性の高い組織。2026年は生成AI「Breeze」活用で成長。
フルリモート、フルフレックス、無制限の休暇制度など、最高水準の柔軟な働き方を実現。`
    },
    {
        name: `IBIDEN`,
        industry: `メーカー`,
        category: `半導体・製造装置`,
        url: `https://ibiden-recruit.jp/university/`,
        salary: `765(420)`,
        employees: 14000,
        memo: `半導体パッケージ基板で世界トップクラス。Intel等の世界的企業を主要顧客に持つ。
2026年度初任給は25.4万(大卒)〜28.0万(院卒)。岐阜・愛知エリア屈指の優良企業。
AI市場の拡大により、次世代半導体向けパッケージ製品への投資を過去最大規模で実施中。
平均勤続年数が長く、地域社会への貢献と高度なモノづくりを両立させる堅実な社風。`
    },
    {
        name: `IBM`,
        industry: `ITサービス・SIer`,
        category: `DX・ITコンサルティング`,
        url: `https://www.ibm.com/jp-ja/careers/career-opportunities`,
        salary: `940(560)`,
        employees: 280000,
        memo: `「watsonx」を核にAIとクラウドで企業変革をリード。コンサルとITの二本柱。
新卒ITスペシャリスト/コンサルは年俸560万前後〜。博士卒は800万以上の提示も。
日本国内の金融・公共インフラを支える強固な基盤と、量子計算等の最先端技術を併せ持つ。
「Think」が共通言語。社内学習プラットフォームが極めて充実しており、一生学び続けられる。`
    },
    {
        name: `IHI`,
        industry: `メーカー`,
        category: `自動車・モビリティ・重工業`,
        url: `https://www.ihi.co.jp/recruit/ihi/`,
        salary: `812(430)`,
        employees: 28000,
        memo: `幕末の造船所に端を発する重工業の雄。航空エンジンや宇宙開発、脱炭素インフラに強み。
大卒初任給26.0万(2025実績)。30代前半で年収700万〜、福利厚生含めた実質待遇はより高い。
2026年はアンモニア発電や次世代航空機の開発を加速。地球規模の課題に挑む「志」を持つ。
誠実で穏やかな社員が多く、大規模プロジェクトに長期スパンで取り組める安定した環境。`
    },
    {
        name: `IIJ`,
        industry: `通信・ネットワークインフラ`,
        category: `通信キャリア・ISP`,
        url: `https://www.iij.ad.jp/recruit/newgrad/`,
        salary: `724(440)`,
        employees: 4800,
        memo: `日本初の商用ISP。高い技術力を誇る「エンジニアの理想郷」的な通信企業。
初任給は26.8万(大卒)〜30.0万(院卒)。高度なネットワーク知識を持つ技術者が集う。
個人向けMVNO(IIJmio)だけでなく、法人向けのセキュリティやクラウド基盤で圧倒的信頼。
「自由闊達」な社風。飯田橋のオフィスには技術書が並び、常に新しい通信の形を模索する。`
    },
    {
        name: `i-mobile`,
        industry: `広告`,
        category: `広告・デジタルマーケティング`,
        url: `https://www.i-mobile.co.jp/recruit/index.html`,
        salary: `650(440)`,
        employees: 400,
        memo: `国内最大級のアドネットワークと、ふるさと納税サイト「ふるなび」の二本柱。
新卒初任給は月35万〜(月30h残業代込)。成果報酬とスピード感を重視する文化。
広告事業で培った集客力を、地方創生やトラベル事業へ横展開する多角化戦略が成功。
若手への抜擢が多く、20代から事業責任者を目指せる、渋谷系メガベンチャーの社風。`
    },
    {
        name: `inet`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.inet.co.jp/recruit/new-graduate/`,
        salary: `580(380)`,
        employees: 1800,
        memo: `横浜を拠点とする、国内屈指の自社データセンターを保有する独立系SIer。
2026年度初任給は大卒24.5万〜。石油販売店向けシステムで国内シェア約3割を誇る。
データセンター(DC)運用、クラウド、受託開発をワンストップで提供できるのが強み。
神奈川県内の主要IT企業として安定性が高く、穏やかで面倒見の良い社員が多い組織。`
    },
    {
        name: `infocom`,
        industry: `ITサービス・SIer`,
        category: `ヘルスケア・メディカル`,
        url: `https://www.infocom.co.jp/ja/recruit/fresh/info.html`,
        salary: `785(460)`,
        employees: 1200,
        memo: `「めちゃコミック」を運営するコンシューマー事業と、医療・企業向け SI のハイブリッド。
新卒初任給は年約460万想定。電子コミック事業の高収益を背景に、IT業界でも屈指の好待遇。
2025年に米投資ファンドによる買収を経て、更なる成長とグローバル展開へ舵を切る。
有休取得率が高く、エンタメとB2Bの両面で社会に貢献できるユニークな立ち位置。`
    },
    {
        name: `INTEC`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.intec.co.jp/recruit/`,
        salary: `680(410)`,
        employees: 3676,
        memo: `富山発祥の大手独立系SIer。TISインテックグループの中核。
2026年度初任給は25.6万(大卒)〜26.7万(院卒)に引き上げ。安定した経営基盤が強み。
金融、製造、公共など広範な業界に顧客を持ち、地方自治体のDX支援にも注力。
「地方創生」に積極的。富山と東京の2本社制で、地域に根ざした大規模開発が可能。`
    },
    {
        name: `ISB`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.isb.co.jp/jinji_saiyou/`,
        salary: `600(380)`,
        employees: 1100,
        memo: `移動体通信や車載、医療分野のシステム開発に強みを持つ独立系SIer。
初任給は月23.4万〜。無線技術や組み込みソフトからクラウドまで幅広く手がける。
独自のセキュリティ製品や医療向けパッケージも展開。東証プライム上場の安定感。
若手への技術教育に定評があり、モバイル・ネットワーク技術の専門性を磨ける環境。`
    },
    {
        name: `istyle`,
        industry: `Web・ネットサービス`,
        category: `Webプラットフォーム・EC`,
        url: `https://www.istyle.co.jp/recruit/`,
        salary: `550(380)`,
        employees: 1200,
        memo: `日本最大級の美容ポータル「@cosme」を運営。メディア×EC×店舗の融合に強み。
初任給は年380万前後〜。データサイエンスを駆使した美容マーケティングをリード。
2026年はAmazonや三越伊勢丹との提携を強化し、購買体験のDXを加速。
美容とテックの融合に興味がある層に人気。自由でフラットなベンチャー気質。`
    },
    {
        name: `ITSCOM`,
        industry: `通信・ネットワークインフラ`,
        category: `通信キャリア・ISP`,
        url: `https://www.itscom.co.jp/corporate/recruit/fresh/`,
        salary: `520(340)`,
        employees: 600,
        memo: `東急グループの通信事業。東急沿線でのCATV、インターネット、スマートホームを展開。
地域密着型のインフラ企業として抜群の安定性。東急沿線の「生活」を支える。
平均年収は約520万。東急グループ共通の充実した福利厚生（交通・レジャー等）が魅力。
スマートホーム技術を活用した、次世代の「安心・便利な暮らし」の社会実装に挑む。`
    },
    {
        name: `ITFOR`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.itfor.co.jp/recruit/`,
        salary: `706(360)`,
        employees: 550,
        memo: `地方銀行向けの債権回収システムや、小売業向けのキャッシュレス決済で高シェア。
平均年収は約706万と、中規模SIerながら高水準。実力重視の給与体系。
キャッシュレス決済「iRITSpay」や公共料金の徴収支援など、ニッチトップな製品が強み。
少数精鋭で、上流から下流まで一貫して携われる機会が多い。2026年度も業績好調。`
    },
    {
        name: `J:COM`,
        industry: `通信・ネットワークインフラ`,
        category: `通信キャリア・ISP`,
        url: `https://recruit.jcom.co.jp/recruit/`,
        salary: `680(400)`,
        employees: 16000,
        memo: `国内最大のケーブルテレビ局。KDDIと住友商事の合弁で強固な基盤。
新卒初任給は月24万〜26万。大手の安定感と、モバイル、エネルギー、医療等の多角化。
2026年は「次世代ホームインフラ」への進化を掲げ、超高速ネットとAI活用を推進。
住宅手当や財形貯蓄、カフェテリアプランなど、KDDIグループ準拠の手厚い福利厚生。`
    },
    {
        name: `JASTEC`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.jastec.co.jp/recruit/`,
        salary: `524(330)`,
        employees: 1200,
        memo: `「一括請負」にこだわる独立系SIerの老舗。独自開発プロセスの徹底による高品質が強み。
初任給は月19.1万〜と控えめだが、プロジェクトの成果が賞与に反映される仕組み。
派遣を極力行わず、自社内での開発を重視する文化。ソフトウェア工学の深い知見を重視。
派手さはないが、地に足の着いた技術力を身につけたいエンジニアに向く堅実な社風。`
    },
    {
        name: `JEiS`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.jeis.co.jp/`,
        salary: `610(420)`,
        employees: 1500,
        memo: `JR東日本グループのIT中核。Suica、駅ネット、運行管理など巨大インフラを支える。
2026年度初任給は24.9万(大卒)〜26.4万(院卒)。JR東日本準拠の安定した待遇。
「止まらないシステム」を作る高い信頼性技術。Suica経済圏の拡大やMaaS開発をリード。
JR東日本グループの充実した福利厚生。鉄道インフラをITで進化させる社会的貢献度が高い。`
    },
    {
        name: `JFEシステムズ`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.jfe-systems.com/recruit/`,
        salary: `838(450)`,
        employees: 1621,
        memo: `JFEスチール発祥のSIer。鉄鋼で培った大規模製造・物流DXと自社プロダクトに強み。
平均年収838万と非常に高水準。初任給も27.1万(大卒)〜28.7万(院卒)へ大幅増。
自社製ERP「ProActive」や電子帳票「FiBridge」など、外販製品でも高いシェアを誇る。
平均勤続年数18年超。ワークライフバランスと高年収を両立できる「超優良ホワイト」。`
    },
    {
        name: `JMDC`,
        industry: `Web・ネットサービス`,
        category: `ヘルスケア・メディカル`,
        url: `https://www.jmdc.co.jp/recruit/`,
        salary: `750(460)`,
        employees: 800,
        memo: `日本最大級の健康保険組合データを保有。データサイエンスで医療課題を解決。
新卒は年俸制460万〜。オムロンの傘下に入り、予防医療・デバイス連携を強化。
データサイエンティストやエンジニアが主役の組織。2026年度もデータ分析案件が急増中。
「データで健康寿命を延ばす」という大義。知的好奇心を満たす、高度で社会性の高い仕事。`
    },
    {
        name: `JustSystems`,
        industry: `Web・ネットサービス`,
        category: `教育・HR・人材`,
        url: `https://www.justsystems.com/jp/employ/new-graduates/index.html`,
        salary: `1432(480)`,
        employees: 337,
        memo: `通信教育「スマイルゼミ」や「ATOK」を展開する高収益企業。
平均年収1,400万超は国内トップ級。少数精鋭で極めて高い利益率を誇る。
新卒初任給は月30万〜(年480万想定)。2026年はAIによる教育DXを加速。
徳島発祥だが現在は東京本社が中心。実力主義で成果がダイレクトに年収へ反映される。`
    },
    {
        name: `JVCKENWOOD`,
        industry: `メーカー`,
        category: `ハードウェア・精密機器`,
        url: `https://www.jvckenwood.com/jp/recruit/fresh/`,
        salary: `853(420)`,
        employees: 16700,
        memo: `日本ビクターとケンウッドが統合。無線機、ドラレコ、音響機器に強み。
2026年度初任給は26.5万(大卒)〜29.0万(院卒)。30代前半で年収700万到達も可能。
「感動を、カタチに。」を掲げ、車載、公共、エンタメの3分野で多角展開。
有休25日付与など福利厚生が極めて手厚く、ワークライフバランスの満足度が高い。`
    },
    {
        name: `kakaku.com`,
        industry: `Web・ネットサービス`,
        category: `SNS・メディア・コンテンツ`,
        url: `https://kakaku.com/info/recruit/job/graduate.html`,
        salary: `684(420)`,
        employees: 1381,
        memo: `「価格.com」「食べログ」「求人ボックス」など、日本最大級のWebメディア群を運営。
新卒は月32万〜(年約420万)。データに基づいたサービス改善が徹底されている。
2026年度は食べログの予約事業や、求人ボックスのマネタイズ強化で成長を維持。
渋谷を拠点とし、私服勤務、フレックス、リモートなど柔軟な働き方が定着している。`
    },
    {
        name: `Kaonavi`,
        industry: `Web・ネットサービス`,
        category: `教育・HR・人材`,
        url: `https://recruit.kaonavi.jp/new-graduate/`,
        salary: `594(400)`,
        employees: 250,
        memo: `顔写真ベースの人材管理ツール「カオナビ」を展開する成長SaaS企業。
新卒は年俸400万〜。中途エンジニアの年収は1,000万超も珍しくない。
2026年は人的資本経営の普及に伴い、企業向け人事DXコンサル領域へ拡大。
「個性」を尊重する文化があり、赤坂のモダンなオフィスで自由な働き方を推進。`
    },
    {
        name: `KATCH`,
        industry: `通信・ネットワークインフラ`,
        category: `通信キャリア・ISP`,
        url: `https://www.katch.co.jp/ex/recruit/`,
        salary: `580(360)`,
        employees: 180,
        memo: `愛知県西三河エリア（刈谷・安城等）を基盤とするケーブルテレビ局。
地域独占の強みを活かした極めて安定した経営。アイシン等の地元企業とも強固な関係。
平均年収は約580万。地元志向の強い層に人気。社宅や家族手当等の福利厚生が充実。
「地域を、もっと元気に。」を掲げ、5G活用や地域DXなどインフラの枠を超えて挑戦。`
    },
    {
        name: `Kanden Systems`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://kanden-sys.jp/recruit/new_graduate/`,
        salary: `610(420)`,
        employees: 1400,
        memo: `関西電力グループのIT戦略を担う。電力安定供給を支える超巨大システムを運用。
2026年度初任給は25万(大卒)〜28万(院卒)。関西エリア有数の安定SIer。
近年はグループ外案件（外販）も強化中。AIやIoTによるスマートシティ開発に注力。
大阪・中之島を拠点とし、充実した住宅補助、研修、福利厚生を誇るホワイト企業。`
    },
    {
        name: `KCCS`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.kccs.co.jp/recruit/recruitment/`,
        salary: `599(450)`,
        employees: 3500,
        memo: `京セラグループのIT・通信中核。アメーバ経営をベースにした高い収益性と堅実さ。
新卒1年目は月給30万〜(賞与込年450万想定)。ICTから基地局建設まで幅広く手がける。
2026年はSigfox(IoT通信)やAI医療画像診断など、先端領域の社会実装をリード。
資格取得支援や福利厚生が非常に手厚く、京セラフィロソフィに基づく誠実な社風。`
    },
    {
        name: `KCN`,
        industry: `通信・ネットワークインフラ`,
        category: `通信キャリア・ISP`,
        url: `https://www.kcn.jp/recruit/freshers.html`,
        salary: `540(340)`,
        employees: 220,
        memo: `近鉄グループの通信インフラ。奈良県・大阪府東部を拠点とするCATV大手。
地域インフラとしての安定性は抜群。近鉄沿線の「通信」と「生活」を支える。
平均年収は約540万。近鉄グループ共通の福利厚生（交通・優待等）が受けられる。
地域情報の配信だけでなく、超高速10Gbpsネットの普及やスマートホーム化を推進。`
    },
    {
        name: `KDDI`,
        industry: `通信・ネットワークインフラ`,
        category: `通信キャリア・ISP`,
        url: `https://career.kddi.com/freshers/event/`,
        salary: `1018(480)`,
        employees: 49000,
        memo: `通信を核に金融、エンタメ、エネルギーへ多角化。2026年も「つなぐ」で世界をリード。
新卒初任給は月30.5万〜。役職グレードに応じた「ジョブ型」要素を取り入れた給与体系。
平均年収がついに1,000万を突破。福利厚生の充実度は国内最高峰。
テレワークや副業、社内インターンが活発で、巨大企業ながら自律的なキャリア形成が可能。`
    },
    {
        name: `KEL`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.kel.co.jp/recruit/`,
        salary: `844(450)`,
        employees: 1200,
        memo: `兼松グループのIT中核企業。仮想化、ストレージ、セキュリティ分野の先駆者。
平均年収800万超の高待遇SIer。新卒1年目月収は約26万円(賞与年2回)。
特定のメーカーに縛られないマルチベンダーとして、海外の先端技術を国内企業へ提供。
平均残業20h以下、完全土日祝休みなど「働きやすさ」と「高年収」を両立する超優良企業。`
    },
    {
        name: `KEYENCE`,
        industry: `メーカー`,
        category: `産業用ロボット・FA`,
        url: `https://www.keyence-jobs.jp/recruit/internship/`,
        salary: `2039(650)`,
        employees: 10580,
        memo: `日本トップクラスの高年収企業。平均年収は2,000万円の大台を維持。
新卒1年目から年収600〜700万に達し、20代後半で2,000万に到達する例も多数。
開発特化型の「ファブレス経営」と、代理店を通さない「直販体制」で利益率50%超を実現。
徹底した合理主義と、顧客も気づかないニーズを掘り起こす「課題解決」のプロ集団。`
    },
    {
        name: `KIOXIA`,
        industry: `メーカー`,
        category: `半導体・製造装置`,
        url: `https://graduates-jp.kioxia.com/`,
        salary: `675(400)`,
        employees: 15400,
        memo: `旧東芝メモリ。NAND型フラッシュメモリで世界シェアトップクラス。
2026年度初任給は大卒約25万、院卒約28万。賞与・残業代込で1年目年収400万前後想定。
AI需要拡大に伴うデータセンター向けメモリが好調。三重県四日市に世界最大級の工場を保有。
東芝時代からの高い技術力を継承。ライフステージに合わせた手厚い住宅・育児支援が魅力。`
    },
    {
        name: `KOBELCO SYSTEMS`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.kobelcosys.co.jp/recruit/student/`,
        salary: `620(410)`,
        employees: 1184,
        memo: `神戸製鋼の現場力とIBMのIT知見を融合したハイブリッドSIer。
平均年収は約620万。中堅以上の予定年収は700〜1,000万レンジとSIerの中でも高め。
製造・物流DXに強み。特定の技術に特化したエンジニアを認定する「テクニカルグレード」制度。
神戸と東京の2拠点。IBM流の教育研修が充実しており、着実にスキルアップできる環境。`
    },
    {
        name: `KONICA MINOLTA`,
        industry: `メーカー`,
        category: `ハードウェア・精密機器`,
        url: `https://www.konicaminolta.jp/business/about/bj/recruit/`,
        salary: `821(400)`,
        employees: 38800,
        memo: `カメラ・フィルムから事業転換。現在はデジタル印刷や医療画像診断に強み。
平均年収は800万超。2026年度初任給は24.8万(大卒)〜27.5万(院卒)に設定。
平均残業時間が月5時間未満と極めて短く、ワークライフバランスの満足度が非常に高い。
「課題提起型デジタルカンパニー」を掲げ、AIやIoTを用いたオフィスDX支援を加速。`
    },
    {
        name: `KPMG`,
        industry: `コンサルティング`,
        category: `DX・ITコンサルティング`,
        url: `https://kpmg.com/jp/ja/careers/consultant/new-graduate-recruitment.html`,
        salary: `1328(500)`,
        employees: 1600,
        memo: `Big4の一角。戦略からデジタル変革、ガバナンスまで幅広く支援。
平均年収は約1,328万。新卒1年目は年俸制460〜500万程度からスタート。
「人が良く、穏やか」と評される社風で、Big4の中ではチームワークや協力体制が強い。
2026年は生成AIガバナンスやサイバーセキュリティ領域のコンサルが急成長中。`
    },
    {
        name: `kubell`,
        industry: `Web・ネットサービス`,
        category: `SaaS・業務効率化`,
        url: `https://career.kubell.com/newgrad/`,
        salary: `682(450)`,
        employees: 400,
        memo: `旧Chatwork。国内最大級のビジネスチャットを基盤に、中小企業のDXを支援。
平均年収は約682万。エンジニア職はスキルに応じ1,000万超の提示もあり。
チャット機能に留まらず、業務代行(BPaaS)など「働く」を効率化するプラットフォームへ。
フルリモート、フルフレックス、副業推奨。自律的なキャリア形成を支援するモダンな社風。`
    },
    {
        name: `KUKA`,
        industry: `メーカー`,
        category: `産業用ロボット・FA`,
        url: `https://www.kuka.com/ja-jp`,
        salary: `750(420)`,
        employees: 15000,
        memo: `ドイツ発、世界4大産業用ロボットメーカーの一角。日本法人は横浜が拠点。
自動車製造ラインの溶接やハンドリングに強み。新卒は年俸制400万前後〜。
欧州基準の「Industry 4.0」を体現する、高い安全性と柔軟性を備えた協働ロボットを開発。
外資系らしいフラットな組織。ドイツ本社との連携も多く、グローバルな視点での開発が可能。`
    },
    {
        name: `Kyocera`,
        industry: `メーカー`,
        category: `産業用ロボット・FA`,
        url: `https://www.kyocera.co.jp/recruit/recruit.html`,
        salary: `694(410)`,
        employees: 81200,
        memo: `「アメーバ経営」で知られる高収益メーカー。半導体部品、通信、太陽電池と多角展開。
平均年収は約694万。独身寮が月3,000〜4,000円で利用できるなど、実質的な待遇はより高い。
2026年度は半導体市場の回復を受け、電子部品やセラミックパッケージへの投資を強化。
京セラフィロソフィに基づく誠実な社風。平均勤続年数15年超と定着率が非常に高い。`
    },
    {
        name: `LAC`,
        industry: `ITサービス・SIer`,
        category: `クラウド・インフラ・セキュリティ`,
        url: `https://www.lac.co.jp/recruit/newgraduate/`,
        salary: `610(440)`,
        employees: 2100,
        memo: `日本のサイバーセキュリティの先駆者。国内最大級の監視センター(JSOC)を運営。
新卒は年俸制440万〜。高度なセキュリティエンジニア(Advanced枠)はさらに優遇。
セキュリティ診断からインシデント対応、基幹システム開発までを一気通貫で手がける。
ホワイトハッカーが多数在籍。官公庁や大手企業への重要案件が多く、社会的貢献度が高い。`
    },
    {
        name: `Lancers`,
        industry: `Web・ネットサービス`,
        category: `Webプラットフォーム・EC`,
        url: `https://www.lancers.co.jp/freshers/`,
        salary: `520(360)`,
        employees: 180,
        memo: `「個のエンパワーメント」を掲げるクラウドソーシングのパイオニア。
平均年収は約520万。新卒は月30万(年360万)相当。エンジニアはスキル評価制。
2026年は生成AI活用による「AIエージェント」事業や、企業のDX人材不足解消を支援。
「誰もが自分らしく働ける社会」を目指し、副業やリモートワークを当たり前とする社風。`
    },
    {
        name: `Lasertec`,
        industry: `メーカー`,
        category: `半導体・製造装置`,
        url: `https://lasertec-saiyo.jp/`,
        salary: `1681(330)`,
        employees: 1000,
        memo: `最先端半導体(EUV)の製造に不可欠な検査装置で世界シェア100%を誇る超優良企業。
平均年収は約1,681万。業績連動賞与が非常に厚く、日本の製造業でもトップ級。
「世の中にないものをつくる」を掲げ、売上の約1割を研究開発に投じる技術志向。
少人数・高生産性を追求。新卒は技術開発職中心で、若手から世界最先端の現場に携わる。`
    },
    {
        name: `LayerX`,
        industry: `Web・ネットサービス`,
        category: `金融・フィンテック`,
        url: `https://jobs.layerx.co.jp/newgrads/`,
        salary: `720(450)`,
        employees: 300,
        memo: `「すべての経済活動を、デジタル化する。」を掲げる DX・FinTech の急成長企業。
支出管理SaaS「バクラク」を主軸に、AI・ブロックチェーン等の先端技術を実務へ実装。
新卒想定年収は約450万〜。スキルや成果に応じた柔軟な評価とストックオプションあり。
三井物産等との合弁も展開。透明性が高く、圧倒的な「コトに向かう」文化。`
    },
    {
        name: `Leverages`,
        industry: `人材サービス`,
        category: `教育・HR・人材`,
        url: `https://leverages-internship.goodfind.jp/`,
        salary: `551(500)`,
        employees: 1800,
        memo: `IT・医療・介護等のドメインで「レバテック」等のマッチング事業を多角展開。
新卒初任給を35万(年500万〜)へ引き上げ。実力主義で、20代での1,000万到達者も多い。
「働きがいのある会社」常連。創業以来、黒字経営を続ける圧倒的な事業開発力が強み。
若手の抜擢人事、充実した教育体制、社内起業制度など、成長意欲の高い層に最適。`
    },
    {
        name: `LIFULL`,
        industry: `Web・ネットサービス`,
        category: `建設・不動産DX`,
        url: `https://recruit.lifull.com/recruit/`,
        salary: `669(450)`,
        employees: 1500,
        memo: `不動産ポータル「LIFULL HOME'S」を運営。「利他主義」を経営理念に掲げる。
平均年収は約669万。20代〜30代前半の昇給幅が大きく、若手の成長を重視する。
不動産に限らず、地方創生や介護、空き家対策など社会課題解決型の事業を多数展開。
有休消化率80%超、残業月20h以内。自分らしく働くことを推奨するホワイトな社風。`
    },
    {
        name: `LINEヤフー`,
        industry: `Web・ネットサービス`,
        category: `Webプラットフォーム・EC`,
        url: `https://www.lycorp.co.jp/ja/recruit/newgrads/`,
        salary: `819(504)`,
        employees: 10000,
        memo: `LINEとヤフーが統合。検索、SNS、決済(PayPay)等を擁する日本最大級のWeb企業。
新卒年収はエンジニア・企画等で504万〜。スキルの高い人材には個別条件提示もあり。
「WOW」と「!」を創る。2026年はグループ全体でのAI実装とサービス統合を加速。
リモートワーク推奨、副業可。多様な専門家が集う、日本で最も「大規模」を経験できる環境。`
    },
    {
        name: `M3`,
        industry: `Web・ネットサービス`,
        category: `ヘルスケア・メディカル`,
        url: `https://corporate.m3.com/recruit/`,
        salary: `931(622)`,
        employees: 1000,
        memo: `世界中の医師が利用する「m3.com」を運営。医療×ITで変革をリードする高収益企業。
平均年収は900万超。ビジネス職/エンジニア職ともに新卒600万超の提示が一般的。
少数精鋭。徹底した論理的思考(ロジカルシンキング)とスピード感を重視する文化。
Google出身者等、優秀な人材が多く在籍。医療の効率化を通じて大きな社会的インパクトを与える。`
    },
    {
        name: `M&A総合研究所`,
        industry: `コンサルティング`,
        category: `金融・フィンテック`,
        url: `https://newgrads.masouken.com/`,
        salary: `3261(336)`,
        employees: 300,
        memo: `AIを活用したM&A仲介で業界を席巻。3年目平均年収が3,000万を超える超高報酬企業。
新卒1年目は固定336万＋インセンティブ。成約実績次第で1年目から1,000万超も可能。
平均成約期間7.1ヶ月という驚異的な効率性。フルデジタルな業務フローが強み。
実力主義を地で行く環境。市場価値を爆速で高めたい、野心的な層が集まる。`
    },
    {
        name: `Makuake`,
        industry: `Web・ネットサービス`,
        category: `Webプラットフォーム・EC`,
        url: `https://www.makuake.co.jp/corporate-introduction/`,
        salary: `676(408)`,
        employees: 250,
        memo: `「応援購入」という新しい消費体験を提供。サイバーエージェントグループ出身。
平均年収は約676万。20代後半から30代にかけての年収アップ幅が安定している。
日本各地のメーカーや伝統工芸、飲食店等の新製品・新サービス発表の場として確立。
世の中の「ワクワク」を支援。クリエイティビティと共感を大切にする、熱量の高い社風。`
    },
    {
        name: `Members`,
        industry: `ITサービス・SIer`,
        category: `広告・デジタルマーケティング`,
        url: `https://recruit.members.co.jp/`,
        salary: `491(380)`,
        employees: 2500,
        memo: `企業のDXや脱炭素経営をデジタル技術で支援。CSV(共通価値の創造)を掲げる。
新卒初任給は約24万〜。デジタルクリエイター、エンジニア等の若手を大量採用・育成。
特定のプラットフォームに依存せず、運用型で顧客のビジネス成長に長く伴走する。
社員による自主経営を推奨。「心豊かな社会」を目指す、誠実でサステナブルな文化。`
    },
    {
        name: `mercari`,
        industry: `Web・ネットサービス`,
        category: `Webプラットフォーム・EC`,
        url: `https://careers.mercari.com/new-graduates/`,
        salary: `1176(600)`,
        employees: 2500,
        memo: `日本発のユニコーンから世界を狙う。フリマアプリ「メルカリ」と「メルペイ」を運営。
平均年収は約1,176万。新卒も技術力やポートフォリオ次第で年収600〜700万提示もあり。
「Go Bold」「All for One」「Be a Pro」を体現。性善説に基づくオープンな組織。
多国籍なメンバーが集い、英語が飛び交う環境。技術研鑽を最大限に尊重する文化。`
    },
    {
        name: `MetaReal`,
        industry: `Web・ネットサービス`,
        category: `AI・データサイエンス`,
        url: `https://www.metareal.jp/recruit/`,
        salary: `1140(400)`,
        employees: 229,
        memo: `AI翻訳「ロゼッタ」を展開。2026年度は翻訳から「AI/メタバース」へ多角化。
平均年収は約1,140万。少数精鋭で高効率な経営を維持している。
AIを駆使した業務効率化を自社でも徹底。2026年はM&Aによる技術領域の拡大を加速。
専門性の高い人材が集まる、スピード感のあるグロース市場上場企業。`
    },
    {
        name: `MITSUBISHI ELECTRIC`,
        industry: `メーカー`,
        category: `産業用ロボット・FA`,
        url: `https://www.mitsubishielectric.co.jp/saiyo/graduates/index.html`,
        salary: `869(403)`,
        employees: 149655,
        memo: `「Changes for the Better」を掲げる総合電機大手。FA機器や宇宙・防衛に強み。
2026年度初任給は26.9万(大卒)〜29.6万(修士)。安定した昇給と充実の手当が魅力。
多岐にわたる事業ポートフォリオで不況に強い。近年はデータ活用による保守サービスを強化。
保養所、社宅、年金制度など国内最高峰の福利厚生。腰を据えて長く働ける環境。`
    },
    {
        name: `MIXI`,
        industry: `Web・ネットサービス`,
        category: `エンタメ・ゲーム・VOD`,
        url: `https://mixigroup-recruit.mixi.co.jp/`,
        salary: `792(500)`,
        employees: 1600,
        memo: `「モンスト」を柱に、スポーツ(TIPSTAR)やSNS(家族アルバム みてね)を多角展開。
新卒初任給は月30万〜。個別のスキル評価により1年目から年収500万超も一般的。
2026年は「コミュニケーション」を軸にしたAI・グローバル展開を加速。
渋谷の最先端オフィス(渋谷スクランブルスクエア)で、自由かつ挑戦を尊ぶ文化。`
    },
    {
        name: `MKI`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.mki.co.jp/recruit/information/newgrads/`,
        salary: `851(430)`,
        employees: 2000,
        memo: `三井物産グループのIT戦略中核。ICTインフラ構築からバイオインフォマティクスまで。
2026年度初任給は約23万〜24万だが、賞与や三井グループの手厚い補助で実年収は高い。
商社のグローバル案件や、AIを活用した先端的な分析プロジェクトに携わることができる。
テレワークやフレックス制が定着しており、多様なキャリアパスを支援するホワイトな環境。`
    },
    {
        name: `MIRAIT ONE`,
        industry: `ITサービス・SIer`,
        category: `クラウド・インフラ・セキュリティ`,
        url: `https://rect.mirait-one.com/recruit/`,
        salary: `725(400)`,
        employees: 4000,
        memo: `通信建設大手。5Gネットワーク構築やデータセンター、再生エネルギー分野に強み。
平均年収は約725万。新卒は大卒月25万〜。現場手当や資格手当が充実している。
「みらいのインフラをつくる」を掲げ、ICTを駆使したスマートシティ開発を推進。
インフラ企業らしい抜群の安定性と、脱炭素社会に向けた新しい事業領域への挑戦が共存。`
    },
    {
        name: `Money Forward`,
        industry: `Web・ネットサービス`,
        category: `SaaS・業務効率化`,
        url: `https://recruit.moneyforward.com/`,
        salary: `711(500)`,
        employees: 1100,
        memo: `「お金を前へ。人生をもっと前へ。」をミッションとする国内SaaSの旗手。
エンジニア新卒は年額500万〜。エキスパート枠は700万〜の提示もあり、技術への投資は惜しまない。
バックオフィスDXの「マネーフォワード クラウド」が絶好調。2026年はAI活用による業務自動化を推進。
「User Focus」を徹底。大崎の独創的なオフィスで、オープンでフラットな議論が行われる。`
    },
    {
        name: `MS&ADシステムズ`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.ms-ad-systems-recruit.com/`,
        salary: `680(430)`,
        employees: 2000,
        memo: `MS&ADインシュアランスグループのIT中核。世界最大級の損保システムを支える。
2026年度初任給は23.6万(大卒)〜25.1万(院卒)。金融系ならではの手厚い福利厚生が魅力。
「保険をデジタルで再定義」すべく、AIやデータサイエンスによるリスク予測を強化中。
有休取得推奨や残業管理が徹底されており、穏やかで着実に専門性を磨ける「安定ホワイト」。`
    },
    {
        name: `MRI`,
        industry: `コンサルティング`,
        category: `シンクタンク・リサーチ`,
        url: `https://www.mri.co.jp/company/recruit/information/internship.html`,
        salary: `1080(500)`,
        employees: 1000,
        memo: `国内屈指のシンクタンク。政府への提言から企業の経営戦略まで、知の最前線。
平均年収1,000万超。初任給は学部26.5万、修士29.7万とシンクタンクの中でも高水準。
2026年は社会の「ウェルビーイング」や「GX」の社会実装に向けたコンサル領域が好調。
高度な専門性を持つプロフェッショナル集団。フレックスやテレワークを駆使した自律的な働き方。`
    },
    {
        name: `MSKK`,
        industry: `Web・ネットサービス`,
        category: `クラウド・インフラ・セキュリティ`,
        url: `https://www.microsoft.com/ja-jp/mscorp/college/mskk`,
        salary: `1200(800)`,
        employees: 2500,
        memo: `「地球上のすべての人に」AIの恩恵を。2026年は「Copilot」を全産業へ実装。
新卒想定年収は800万〜1,500万レンジ。他を圧倒する待遇とAIプラットフォームの強み。
平均年収1,200万超。全世界の知見が詰まった「Learn」文化があり、学びの機会は無限。
「Growth Mindset」を重視。多様性とインクルージョンを体現した、世界最高峰の職場環境。`
    },
    {
        name: `NEC`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://jpn.nec.com/recruit/newgraduate/index.html`,
        salary: `924(480)`,
        employees: 124000,
        memo: `IT・ネットワーク技術の先駆者。独自のLLM「cotomi」や世界一の顔認証に強み。
2026年度初任給は29.4万(大卒)〜31.4万(修士)。待遇とジョブ型雇用を一段と強化。
平均年収は900万超へ。公共、宇宙、海洋、サイバーセキュリティとフィールドは広大。
テレワーク標準の「Work Life Shift」が浸透。大企業の安定感と変革のスピードを併せ持つ。`
    },
    {
        name: `NEC Lenovo Japan`,
        industry: `メーカー`,
        category: `ハードウェア・精密機器`,
        url: `https://www.necpc-lenovo-recruit.jp/`,
        salary: `700(480)`,
        employees: 1200,
        memo: `PC世界シェア首位のレノボとNECの合弁。米沢工場での「日本品質」が武器。
2026年度新卒初任給は約27〜29万円(年450〜500万想定)。外資と日系のハイブリッド文化。
年間休日126日、Sick Leave(病気休暇)等の外資らしい手厚い休暇制度が魅力。
PCだけでなく、スマートデバイスやAIサーバー等、次世代のICTインフラ開発を牽引。`
    },
    {
        name: `NECソリューションイノベータ`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.nec-solutioninnovators.co.jp/saiyo/recruit/`,
        salary: `666(450)`,
        employees: 12000,
        memo: `NECグループ最大級のSIer。官公庁、医療、製造など日本の全産業を網羅。
2026年度初任給は25.4万(大卒)〜28.0万(院卒)に引き上げ。安定性は業界屈指。
警察の110番システムや電力監視など、公共性の極めて高い大規模開発に強み。
「地方創生」を掲げ、ICTを用いた地域課題解決や見守りサービス等、社会貢献度が大。`
    },
    {
        name: `neocareer`,
        industry: `サービス`,
        category: `教育・HR・人材`,
        url: `https://www.neo-career.co.jp/recruit/newgrads/`,
        salary: `420(360)`,
        employees: 3000,
        memo: `人材・IT領域で急成長を続けるメガベンチャー。20代の成長環境として定評。
新卒初任給は30万(年360万〜)。実力主義で、20代でのマネージャー昇進が一般的。
「小学校卒業まで」の時短勤務や不妊治療支援など、ライフイベントへの手厚い補助。
学習システム「N-Learning」により、6,000本以上の講座が無料で受講可能な教育体制。`
    },
    {
        name: `net one`,
        industry: `ITサービス・SIer`,
        category: `クラウド・インフラ・セキュリティ`,
        url: `https://www.netone.co.jp/recruit/newgrad/`,
        salary: `830(450)`,
        employees: 2500,
        memo: `ネットワークインフラ構築の国内リーダー。自社LLM「NELMO」を開発・活用。
平均年収830万の高水準。2026年度初任給は26.0万(大卒)〜27.5万(修士)に設定。
最新のファシリティマネジメント賞を受賞するなど、先進的なワークプレイス戦略。
IOWNや5G、デジタルツインを用いた次世代オートメーション分野での技術力が強み。`
    },
    {
        name: `NGK`,
        industry: `メーカー`,
        category: `自動車・モビリティ・重工業`,
        url: `https://www.ngk.co.jp/recruit/university/`,
        salary: `845(450)`,
        employees: 20000,
        memo: `世界シェア首位の「がいし」や排ガス浄化セラミックスを持つ技術立社。
平均年収は845万。海外売上比率が非常に高く、若手の海外駐在チャンスが豊富。
独自技術を核に、半導体製造装置用部品や電力貯蔵用NAS電池などの成長分野を牽引。
「トリプルE(エネルギー・エコロジー・エレクトロニクス)」領域で世界に貢献する。`
    },
    {
        name: `MinebeaMitsumi`,
        industry: `メーカー`,
        category: `ハードウェア・精密機器`,
        url: `https://www.minebeamitsumi.com/corp/recruit/recruitment/new_graduate/`,
        salary: `720(410)`,
        employees: 85000,
        memo: `世界最小のベアリングで知られる超精密部品の巨人。12期連続の増収を継続.
新卒想定年収は450〜500万。58社との経営統合を経た「相合(そうごう)」力が武器.
航空機、スマホ、医療、インフラまで、あらゆる産業に不可欠な精密部品を供給.
海外生産比率が9割を超え、グローバルに活躍したいエンジニアには絶好の環境.`
    },
    {
        name: `Nintendo`,
        industry: `Web・ネットサービス`,
        category: `エンタメ・ゲーム・VOD`,
        url: `https://www.nintendo.co.jp/jobs/recruit/index.html`,
        salary: `967(510)`,
        employees: 7300,
        memo: `世界屈指のIPを保有。2026年は映画やテーマパークを通じた「IP活用」を加速。
平均年収967万。初任給は大卒25.6万〜。1年目から年収500万前後が見込める。
最新技術を追うのではなく「独自の遊び」を追求。Switch後継機等、ハード展開に注目。
「独創性」を何より重視する文化。福利厚生や住宅補助も国内トップクラスの充実度。`
    },
    {
        name: `NEURAL`,
        industry: `ITサービス・SIer`,
        category: `AI・データサイエンス`,
        url: `https://www.neural-group.com/recruit.html`,
        salary: `650(450)`,
        employees: 150,
        memo: `独自の画像解析AIを核に、スマートシティや駐車場DXを展開するAIテック企業。
駐車場AIカメラのリアルタイム解析や音声認識技術など、社会実装に強いのが特徴。
新卒は年俸制をベースに個別に決定。2026年はM&Aを加速しグループを拡大中。
「AIを、当たり前の日常に。」を掲げる、少数精鋭でスピード感のある研究開発集団。`
    },
    {
        name: `nichicon`,
        industry: `メーカー`,
        category: `産業用ロボット・FA`,
        url: `https://www.nichicon.co.jp/recruit_graduates/`,
        salary: `680(390)`,
        employees: 5000,
        memo: `アルミ電解コンデンサ大手。現在はEV向け急速充電器やV2Hシステムで急成長。
平均年収は600万〜700万レンジ。2026年2月時点でフィスコ調査の最高平均は1,000万超。
「今すぐやる」の精神。脱炭素社会に向けた家庭用・公共用電源インフラを支える。
京都に拠点を置き、誠実なモノづくりと「トップノッチ(最上級)経営」を追求。`
    },
    {
        name: `Nidec`,
        industry: `メーカー`,
        category: `産業用ロボット・FA`,
        url: `https://www.nidec.com/jp/recruit/fresh-recruit/requirements/`,
        salary: `660(410)`,
        employees: 120000,
        memo: `「回るもの、動くもの」で世界シェアを席巻。永守会長率いる超情熱的メーカー。
大卒初任給25万〜。2026年度は工作機械やEV向けトラクションモータへの投資を強化。
「すぐやる、必ずやる、出来るまでやる」の3Q思想が根付く、圧倒的ハードワークな社風。
福利厚生も近年改善。世界2,000名体制のAI教育など、デジタルの活用にも注力中。`
    },
    {
        name: `Nitto`,
        industry: `メーカー`,
        category: `ヘルスケア・メディカル`,
        url: `https://www.nitto.com/jp/ja/employment/`,
        salary: `834(400)`,
        employees: 28000,
        memo: `「Global Niche Top」戦略で、液晶用偏光板やスマホ向けテープ等の世界シェア1位を多数保有。
2026年度初任給は26.0万(大卒)〜28.3万(修士)へ引き上げ。メーカーの中でも高水準な年収。
ESG経営に注力。2026年はライフサイエンス(核酸医薬)や環境貢献製品への投資を加速。
平均勤続年数が長く、個々の「志」を尊重する自由でオープンな社風。`
    },
    {
        name: `note`,
        industry: `Web・ネットサービス`,
        category: `SNS・メディア・コンテンツ`,
        url: `https://note.jp/n/n9288424f94af`,
        salary: `700(400)`,
        employees: 200,
        memo: `「だれもが創作をはじめ、続けられるようにする」プラットフォームnoteを運営。
新卒想定年収は約400万〜。エンジニアなど専門職はスキルに応じて柔軟な提示。
法人向け「note pro」が成長中。2026年度はAIによる執筆支援機能の強化でPV数も拡大。
「クリエイターエコノミー」の旗手。フラットで心理的安全性の高い組織文化が特徴。`
    },
    {
        name: `NRI`,
        industry: `コンサルティング`,
        category: `シンクタンク・リサーチ`,
        url: `https://www.nri.com/jp/career.html`,
        salary: `1322(500)`,
        employees: 17000,
        memo: `国内屈指のシンクタンク兼SIer。2026年度初任給は住宅手当込みで月33.6万〜。
30歳前後で年収1,000万に到達する圧倒的な高年収。実力と貢献度に基づく評価体系。
金融・小売などの超大規模システムから国家レベルの政策提言まで。
専門性が極めて高いプロ集団。多忙だが、充実した研修や福利厚生により若手の成長が速い。`
    },
    {
        name: `NSK`,
        industry: `メーカー`,
        category: `産業用ロボット・FA`,
        url: `https://www.nsk.com/jp-ja/company/career/graduate/`,
        salary: `764(400)`,
        employees: 25000,
        memo: `ベアリング（軸受）国内1位、世界3位。自動車や家電に不可欠な精密部品の巨人。
平均年収は約764万。初任給は24万〜27万レンジ。福利厚生や住宅補助が手厚い。
2026年度はEV向け電動パワーステアリングや、風力発電等の再エネ向け軸受を強化。
「摩擦をゼロに」という情熱を持つ技術者集団。誠実で落ち着いた社風の優良メーカー。`
    },
    {
        name: `NSD`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://recruit.nsd.co.jp`,
        salary: `716(300)`,
        employees: 3800,
        memo: `設立50年超、東証プライム上場の独立系SIer。特定のベンダーに縛られない提案が強み。
平均年収は約716万。賞与が年3回（平均5.7ヶ月分）あり、安定した高水準を維持。
金融・製造・公共などバランスの取れた顧客基盤。2026年度も10%超の増収を狙う。
研修制度や資格取得支援が充実。10年連続で離職率が低水準の、人を大切にするホワイトSIer。`
    },
    {
        name: `NSW`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.nsw.co.jp/recruit/`,
        salary: `605(300)`,
        employees: 2300,
        memo: `「組込」と「業務」の両輪に強み。渋谷を拠点とする独立系SIer。
新卒初任給は24万〜25万。IoTやエッジAIを用いた製造現場のDX支援が好調。
デバイス開発からクラウド、サービス運用までワンストップで提供できるのが武器。
若手へのフォローが手厚いアットホームな社風。最新のAI・IoT技術を現場で学べる。`
    },
    {
        name: `NTT`,
        industry: `通信・ネットワークインフラ`,
        category: `通信キャリア・ISP`,
        url: `https://group.ntt/jp/careers_group/`,
        salary: `945(480)`,
        employees: 330000,
        memo: `日本最大の通信グループ。2026年度は次世代ネットワーク「IOWN」の商用化をリード。
ジョブ型雇用の導入で待遇改善が進み、若手でも成果次第で高い年収が得られる。
平均年収は主要各社で900万超。福利厚生の充実度（社宅、手当、休暇）は国内最強クラス。
「分散型オフィス」やテレワークが標準。世界最高峰の研究開発力を背景に社会を変える。`
    },
    {
        name: `NTT DATA`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://nttdata-recruit.com/`,
        salary: `923(500)`,
        employees: 190000,
        memo: `国内最大のITサービス・SIer企業。2026年度初任給は30万(大卒)〜31.2万(院卒)へ急増。
公共インフラや金融決済を支える圧倒的な信頼性。30代前半で1,000万超も可能。
「NTTデータグループ」として海外売上比率が6割超へ。グローバルな活躍機会が豊富。
多様性を尊重し、ワークライフバランスとプロ意識を両立させる業界のベンチマーク企業。`
    },
    {
        name: `NTT docomo Business`,
        industry: `通信・ネットワークインフラ`,
        category: `通信キャリア・ISP`,
        url: `https://engineers.ntt.com/`,
        salary: `842(480)`,
        employees: 12000,
        memo: `ドコモ、コム、コムウェアが統合した法人事業ブランド。ICTで社会構造を変える。
新卒初年度から年収500万近くが可能。テレワークや副業が推奨される柔軟な環境。
2026年は「Smart City」や「Mobility」分野のDX案件を大量に受注・推進。
「Smart Work style」を体現。高度な専門性を持つエンジニアやコンサルタントが活躍。`
    },
    {
        name: `NTT docomo Solutions`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.nttcom.co.jp/`,
        salary: `786(430)`,
        employees: 7000,
        memo: `NTTドコモグループのSI・ソフトウェア開発を担う中核。大規模法人DXを実現。
2026年度初任給は月29万〜(大卒)。NTTグループの安定した給与・福利厚生を継承。
5G、IoT、AIを駆使した製造や物流の現場DX。ドコモのリソースを最大限活用。
研修やキャリア開発支援が非常に手厚い。穏やかながら専門性の高いメンバーが集まる。`
    },
    {
        name: `NIC`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.niandc.co.jp/recruitment/recruit/graduate/`,
        salary: `720(430)`,
        employees: 1200,
        memo: `NTTと日本IBMの合弁から生まれた、両社の強みを併せ持つハイブリッドSIer。
2026年度新卒初任給は約26〜27万円(年430万相当)。IBMの製品力とNTTの信頼性が武器。
クラウド、AI、EDI（電子データ交換）領域に強く、大規模なDXプロジェクトを多数担当。
「ハピネス経営」を掲げ、フルリモート推奨や充実した福利厚生など、社員の幸福度を重視。`
    },
    {
        name: `OGIS`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.ogis-ri.co.jp/recruit/gradu/`,
        salary: `702(435)`,
        employees: 1540,
        memo: `大阪ガスグループのIT中核。日本でいち早く「オブジェクト指向」を導入した技術者集団。
平均年収は約702万。初任給24.5万〜、充実した住宅補助により実質的な手取りはより高い。
モデリング技術(UML)やアジャイル開発で国内屈指の技術力を誇り、外販比率も高い。
穏やかで知的な社員が多く、技術を深く追求できる「エンジニアにとっての理想郷」の一つ。`
    },
    {
        name: `OKI`,
        industry: `メーカー`,
        category: `ハードウェア・精密機器`,
        url: `https://www.oki.com/jp/recruit/graduate/`,
        salary: `781(400)`,
        employees: 14700,
        memo: `日本初の通信機器メーカー。「社会のインフラを支える」ATM、航空管制、防災無線に強み。
平均年収は約781万。2026年度初任給は25.4万(大卒)〜28.0万(院卒)に引き上げ。
光ファイバーセンサーを活用したインフラ監視など、独自技術による社会課題解決に注力。
「誠実・地道」な社風。福利厚生が極めて手厚く、平均勤続年数も長い安定優良企業。`
    },
    {
        name: `OLYMPUS`,
        industry: `メーカー`,
        category: `ヘルスケア・メディカル`,
        url: `https://www.olympus.co.jp/recruit/newgraduates/`,
        salary: `1046(450)`,
        employees: 32000,
        memo: `カメラ事業を譲渡し、現在は「世界的な医療テック企業」へ完全転換。
平均年収がついに1,000万を突破。初任給も28万(大卒)〜30.7万(修士)とトップ級へ。
消化器内視鏡で世界シェア約70%を独占。AIによる診断支援など、医療DXを加速。
外資系に近い成果主義と、日系メーカーの福利厚生が融合。グローバルな活躍機会が豊富。`
    },
    {
        name: `OMRON`,
        industry: `メーカー`,
        category: `産業用ロボット・FA`,
        url: `https://www.omron.com/jp/ja/recruit/newgrad/`,
        salary: `860(430)`,
        employees: 28000,
        memo: `「i-Automation!」で製造現場の革新をリードする、FA・制御機器の世界的リーダー。
2026年度初任給は26.0万(大卒)〜28.3万(院卒)。関西を代表する高収益・高年収企業。
「ソーシャルニーズの創造」を掲げ、自動改札や健康医療など数多くの「世界初」を生んできた。
企業理念「SINIC理論」が浸透。自由闊達で、個人の意志と挑戦を最大限に尊重する文化。`
    },
    {
        name: `OPEN HOUSE`,
        industry: `不動産`,
        category: `建設・不動産DX`,
        url: `https://recruit.openhouse-group.com/new-graduate/`,
        salary: `932(500)`,
        employees: 5000,
        memo: `「行こうぜ、1兆。2兆。」を掲げる、不動産業界で最も勢いのある成長企業。
平均年収932万。新卒1年目から年収500万前後、トップセールスは20代で2,000万超も。
「都心・駅近・戸建」の独自戦略と、徹底した成果主義が成長の源泉。
極めてタフな環境だが、短期間で圧倒的な稼ぐ力と「やり抜く力」を身につけたい層に人気。`
    },
    {
        name: `OPTAGE`,
        industry: `通信・ネットワークインフラ`,
        category: `通信キャリア・ISP`,
        url: `https://optage.co.jp/recruit/fresh/`,
        salary: `650(420)`,
        employees: 2700,
        memo: `関西電力グループの通信・IT中核。「eo光」や格安スマホ「mineo」を展開。
平均年収は約650万。初任給24.5万〜。関西エリアの通信インフラを支える安定企業。
法人向けにはクラウドやセキュリティなどのSI事業も拡大。5Gを活用した地域DXに注力。
「挑戦」を重んじる。住宅手当や財形貯蓄など、関電グループ準拠の充実した福利厚生。`
    },
    {
        name: `OPTiM`,
        industry: `Web・ネットサービス`,
        category: `AI・データサイエンス`,
        url: `https://www.optim.co.jp/recruit/new-graduate/`,
        salary: `606(410)`,
        employees: 600,
        memo: `「ネットを空気に変える」。MDM(端末管理)で国内シェアNo.1を長年維持。
新卒初任給はエンジニア職で月約31万〜(年400万相当)。技術特化の評価体系.
ドローンやAIを用いた「スマート農業」など、一次産業をDXで救う事業に強み。
「世界一、AIを実用化させる」集団。知的財産権にこだわり、特許取得数も非常に多い。`
    },
    {
        name: `ORACLE`,
        industry: `ITサービス・SIer`,
        category: `クラウド・インフラ・セキュリティ`,
        url: `https://www.oracle.com/jp/careers/students-grads/`,
        salary: `1259(500)`,
        employees: 2500,
        memo: `世界シェア首位のDBと、ミッションクリティカルなクラウド「OCI」を展開。
新卒初任給は約464万円〜(年約500万想定)。平均年収は1,200万を超える高待遇。
2026年は政府クラウドや生成AI(OCI Generative AI)関連の大型案件が急増中。
「自律」を重んじる外資文化。研修が非常に充実しており、市場価値の高い技術が身につく。`
    },
    {
        name: `PFN`,
        industry: `ITサービス・SIer`,
        category: `AI・データサイエンス`,
        url: `https://www.preferred.jp/ja/careers`,
        salary: `950(650)`,
        employees: 300,
        memo: `日本を代表するAIユニコーン。自社開発のプロセッサ「MN-Core」を持つ。
新卒想定年収は600〜700万。世界レベルのエンジニアや研究者が集うエリート集団。
AI創薬、自動運転、ロボット、アニメ生成など、ディープラーニングの社会実装をリード。
「現実世界を計算可能にする」という壮大な目標。自由でアカデミックな雰囲気が特徴。`
    },
    {
        name: `PLAID`,
        industry: `Web・ネットサービス`,
        category: `SaaS・業務効率化`,
        url: `https://newgrads.plaid.co.jp/`,
        salary: `940(450)`,
        employees: 300,
        memo: `CXプラットフォーム「KARTE」を運営。国内SaaS企業の年収ランキングでトップクラス。
平均年収は約940万。新卒は個別の能力評価だが、想定年収450万〜600万と極めて高い。
データを活用した「顧客体験(CX)」の最適化に特化し、大手企業のDXパートナーとして成長。
完全にフラットな組織文化を志向。自由度が高く、プロダクト中心主義のエンジニア集団。`
    },
    {
        name: `Oisix ra daichi`,
        industry: `Web・ネットサービス`,
        category: `Webプラットフォーム・EC`,
        url: `https://recruit.oisixradaichi.co.jp/ordig/`,
        salary: `645(468)`,
        employees: 787,
        memo: `「Oisix」「らでぃっしゅぼーや」「大地を守る会」を統合した食のサブスク最大手。
新卒初任給は一律月30万(年468万〜)と、小売・EC業界の中では非常に高水準。
2026年度はパーソナライズ化された「食のDX」を加速。社会的課題解決への意識が高い。
「ORDig」ブランドでエンジニア採用を強化。私服、リモート可、食に関する福利厚生が充実。`
    },
    {
        name: `Panasonic CONNECT`,
        industry: `メーカー`,
        category: `SIer（システム開発・運用）`,
        url: `https://connect.panasonic.com/jp-ja/recruit/graduate/`,
        salary: `733(480)`,
        employees: 28500,
        memo: `パナソニックのB2B事業を担う中核。Blue Yonder買収によりソフトウェア企業へ変革中。
2026年度初任給は、最先端技術・専門人材で月30.5万〜(院卒)に設定。ジョブ型雇用を推進。
「カルチャー改革」の旗手。服装自由、さん付け呼称、DEIの推進など、メーカーの枠を越えた社風。
顔認証ゲート、製造・物流DXなど、世界の現場をデジタルで繋ぐ大規模プロジェクトが豊富。`
    },
    {
        name: `PFU`,
        industry: `メーカー`,
        category: `ハードウェア・精密機器`,
        url: `https://www.pfu.ricoh.com/recruit/students/`,
        salary: `684(400)`,
        employees: 4400,
        memo: `世界シェアNo.1のスキャナを誇る。リコーグループのIT・ハードウェア戦略中核。
2026年度初任給は大卒約25万〜。石川県と東京の2拠点体制で、安定した経営基盤が強み。
Happy Hacking Keyboard (HHKB) の開発元でもあり、世界中に根強いファンを持つ。
インフラ構築から組込ソフト、エッジコンピューティングまで、確かな技術力を持つ。`
    },
    {
        name: `pixiv`,
        industry: `Web・ネットサービス`,
        category: `SNS・メディア・コンテンツ`,
        url: `https://www.pixiv.co.jp/new-graduates/`,
        salary: `650(450)`,
        employees: 300,
        memo: `「創作活動を、もっと楽しくする。」世界最大級のイラストSNSを運営。
新卒は年俸制。エンジニア職はスキルに応じて450万〜650万程度の提示が一般的。
2026年度は海外ユーザー比率が拡大。BOOTHやFANBOXによる収益還元モデルが好調。
エンジニアの裁量が極めて大きく、自社サービスの改善に情熱を持つ「オタク」な精鋭集団。`
    },
    {
        name: `PKSHA Technology`,
        industry: `ITサービス・SIer`,
        category: `AI・データサイエンス`,
        url: `https://www.pkshatech.com/`,
        salary: `850(600)`,
        employees: 400,
        memo: `東大発のAIリーディングカンパニー。企業のDXやコミュニケーションをAIで再定義。
新卒想定年収は約600万〜。国内屈指のアルゴリズムエンジニアが集まり、給与水準も高い。
2026年度は生成AIを用いたエンタープライズ向けソリューション(PKSHA LLM等)に注力。
「知能を社会に実装する」集団。アカデミックな背景を持ちつつ、ビジネスへの実装力が極めて高い。`
    },
    {
        name: `PwCコンサルティング`,
        industry: `コンサルティング`,
        category: `DX・ITコンサルティング`,
        url: `https://www.pwc.com/jp/ja/careers/consulting/campus.html`,
        salary: `1000(665)`,
        employees: 4800,
        memo: `Big4の一角。新卒1年目の年俸は学士665万、修士685万から。賞与込で初年度750万超も。
2026年度はAI実装コンサルに全振り。戦略策定からシステム実装までワンストップで支援。
昇格スピードが速く、30歳前後でマネージャーに昇進し、年収1,300万円〜が可能。
「People-first」な文化。教育投資が非常に手厚く、コンサルタントとしての基礎が徹底的に磨かれる。`
    },
    {
        name: `QTnet`,
        industry: `通信・ネットワークインフラ`,
        category: `通信キャリア・ISP`,
        url: `https://www.qtnet.co.jp/recruit/information/graduate/index.html`,
        salary: `620(410)`,
        employees: 800,
        memo: `九州電力グループの通信中核。光ネット「BBIQ」や格安スマホ「QTモバイル」を展開。
2026年度初任給は24万(大卒)〜25.9万(院卒)に引き上げ。福岡屈指の安定・ホワイト企業。
近年はeスポーツ施設運営や地域DX事業を強化。九州の「みらい」を支えるインフラ力が強み。
九電グループの手厚い福利厚生。地元志向と先端ITの両立を目指す層に根強い人気。`
    },
    {
        name: `RAKSUL`,
        industry: `Web・ネットサービス`,
        category: `Webプラットフォーム・EC`,
        url: `https://recruit.raksul.com/newgrads/`,
        salary: `742(500)`,
        employees: 350,
        memo: `「仕組みを変えれば、世界はもっとよくなる」。印刷・広告・物流のDXを推進。
新卒年収はビジネス・エンジニア職ともに500万〜。職能ごとに明確な評価基準がある。
2026年度は、M&Aによりグループ化した各事業のPMIとAI活用による効率化を加速。
産業構造の変革に挑む強いミッション性。少数精鋭で、若手から経営的な視点が求められる社風。`
    },
    {
        name: `Rakuten`,
        industry: `Web・ネットサービス`,
        category: `Webプラットフォーム・EC`,
        url: `https://corp.rakuten.co.jp/careers/graduates/`,
        salary: `820(450)`,
        employees: 32000,
        memo: `「イノベーションを通じて、人々と社会をエンパワーメントする」。日本最大のネット経済圏。
2026年度初任給は31万(大卒)〜32万(修士)に引き上げ。TOEIC800点が必須条件。
モバイル事業の収益改善が進み、楽天エコシステム全体のAI活用による「AI-nization」を推進。
社内公用語は英語。世界中から人材が集まる多国籍な環境。24時間無料の社員食堂等、福利厚生も充実。`
    },
    {
        name: `Panasonic`,
        industry: `メーカー`,
        category: `ハードウェア・精密機器`,
        url: `https://recruit.jpn.panasonic.com/newgrads/`,
        salary: `733(480)`,
        employees: 233000,
        memo: `「幸せの、チカラに。」を掲げる日本最大級の電機連合。2022年に持株会社制へ移行。
2026年度初任給は26.9万(大卒)〜29.6万(修士)に引き上げ。住宅補助等も非常に手厚い。
家電に加え、車載電池、空調空質、SCMソフトウェア等の成長領域へ投資を集中。
ジョブ型雇用の導入を加速。大企業の安定感と、各事業会社の専門性を両立できる環境。`
    },
    {
        name: `RECRUIT`,
        industry: `Web・ネットサービス`,
        category: `教育・HR・人材`,
        url: `https://www.recruit.co.jp/employment/students/`,
        salary: `1119(470)`,
        employees: 17000,
        memo: `「まだ、ここにない、出会い。」を創る。Indeed、SUUMO、リクナビ等を運営。
新卒1年目月収32.6万(固定残業含)から。30歳前後で年収1000万到達も可能な成果主義。
「お前はどうしたい？」が共通言語。圧倒的な当事者意識と事業開発力が身につく。
早期退職金制度「フロンティア」や副業OKなど、卒業(退職)後の活躍も前提とした組織文化。`
    },
    {
        name: `RENESAS`,
        industry: `メーカー`,
        category: `半導体・製造装置`,
        url: `https://career.renesas.com/graduates`,
        salary: `810(420)`,
        employees: 21000,
        memo: `日立、三菱、NECの半導体部門が統合。マイコン分野で世界トップクラスのシェア。
平均年収は約810万。新卒は大卒月給26.5万〜、修士32.0万〜とメーカー最高水準。
2026年度は車載・産業向けのAI機能搭載マイコン(RZシリーズ等)への投資を強化。
外資系に近い意思決定の速さと、日系大手の福利厚生が融合。グローバルな活躍。`
    },
    {
        name: `RICOH`,
        industry: `メーカー`,
        category: `ハードウェア・精密機器`,
        url: `https://jp.ricoh.com/jobs/about`,
        salary: `860(410)`,
        employees: 78000,
        memo: `複合機から「デジタルサービスの会社」へ転換。ITサービス・SIerの売上比率が拡大中。
平均年収は860万。初任給は25.0万(大卒)〜27.6万(院卒)。35歳前後で年収900万超も。
「Workplaceの本質を追求する」を掲げ、クラウド連携やAIによるオフィスDXに強み。
有休取得率が高く、男性育休やテレワークも定着したSIer・メーカー界のホワイト企業。`
    },
    {
        name: `ROHM`,
        industry: `メーカー`,
        category: `半導体・製造装置`,
        url: `https://micro.rohm.com/jp/employment/recruit.html`,
        salary: `810(410)`,
        employees: 24000,
        memo: `京都の老舗半導体メーカー。EVシフトで需要急増の「SiCパワー半導体」で世界首位級。
平均年収は約810万。2026年度初任給は24.2万(大卒)〜26.0万(修士)に引き上げ。
垂直統合型のモノづくりにこだわり、高品質なICやセンサーを世界中のメーカーへ供給。
「われわれは、つねに品質を第一とする」の精神。京都に根ざした誠実なモノづくり文化。`
    },
    {
        name: `Roland`,
        industry: `メーカー`,
        category: `ハードウェア・精密機器`,
        url: `https://www.roland.com/jp/recruit/`,
        salary: `713(390)`,
        employees: 2800,
        memo: `世界的な電子楽器メーカー。浜松を拠点に、プロ仕様から教育用まで幅広く展開。
平均年収は約713万。音楽愛好家や技術オタクが集まる、極めてクリエイティブな社風。
ハードだけでなく、クラウドベースのコンテンツ配信「Roland Cloud」等ソフト領域も強化。
海外売上比率が約9割。世界中のミュージシャンを支えるという誇りと、自由な文化。`
    },
    {
        name: `Salesforce`,
        industry: `Web・ネットサービス`,
        category: `SaaS・業務効率化`,
        url: `https://careers.salesforce.com/jp/`,
        salary: `1150(500)`,
        employees: 70000,
        memo: `世界シェアNo.1のCRM/SaaS。2026年は自律型AI「Agentforce」を主軸に展開。
平均年収1150万。新卒は500万〜。外勤営業へ昇格後はインセンティブで2000万超も。
「Ohana(家族)」の文化を掲げ、フィランソロピー(1-1-1モデル)を推進。
丸の内の最新オフィスで、最高峰のSaaSビジネスとAI活用を学べる刺激的な環境。`
    },
    {
        name: `Sansan`,
        industry: `Web・ネットサービス`,
        category: `SaaS・業務効率化`,
        url: `https://jp.corp-sansan.com/recruit/newgrads/`,
        salary: `780(568)`,
        employees: 1400,
        memo: `「出会いからイノベーションを生み出す」。名刺管理Sansanと請求書受領Bill Oneが柱。
初任給を一気に「年収568万」へ引き上げ、トップ層の獲得を強化。平均年収も780万超。
独自のデータ化技術を武器に、企業の接点情報を価値に変えるプラットフォームを構築。
「強みを活かす」「成果に向き合う」文化。表参道オフィスを拠点に挑戦し続ける集団。`
    },
    {
        name: `SAP`,
        industry: `ITサービス・SIer`,
        category: `SaaS・業務効率化`,
        url: `https://jobs.sap.com/content/graduates/`,
        salary: `1117(450)`,
        employees: 100000,
        memo: `世界中の企業の基幹業務(ERP)を支えるドイツ発のIT巨人。クラウドシフトに成功。
平均年収1100万超。新卒はジョブグレードに応じ400万〜500万想定から早期に昇給。
2026年は「Business AI」を全モジュールに実装。企業の経営を根底から変革する。
「Bring everything you are」を掲げ、多様性と自律性を尊重。大手企業の最上流支援。`
    },
    {
        name: `SB Technology`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.softbanktech.co.jp/corp/hr/recruit/guide`,
        salary: `740(430)`,
        employees: 1300,
        memo: `ソフトバンクグループのIT戦略中核。Microsoftクラウド導入やセキュリティに強み。
平均年収は約740万。30代前半で年収650〜750万がボリュームゾーン。
自治体のDX支援や、AIを用いたデータ活用コンサルティング領域が急成長中。
テレワークが標準化されており、資格取得支援やスキルアップ研修が非常に手厚いSIer。`
    },
    {
        name: `SCREEN`,
        industry: `メーカー`,
        category: `半導体・製造装置`,
        url: `https://www.screen.co.jp/recruit/fresh/`,
        salary: `1025(440)`,
        employees: 6300,
        memo: `半導体洗浄装置で世界シェア約5割を誇る、京都発の精密機器メーカー。
平均年収がついに1,000万を突破。業績連動賞与が非常に厚いのが特徴。
2026年度初任給は25.5万(大卒)〜28.2万(院卒)。30代前半で年収800万超も一般的。
「思考の展開」を掲げ、自由でアットホームな社風。京都に根ざしつつ世界と戦える。`
    },
    {
        name: `SCSK`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.scsk.jp/recruit/saiyo/index.html`,
        salary: `788(512)`,
        employees: 15500,
        memo: `住友商事グループのIT中核。2026年度初任給を月32万円(大卒)へ大幅引き上げ。
IT業界のホワイト化を牽引。「残業月20h・有休100%消化」を本気で推進する社風。
コンサルからインフラまで全領域に強み。安定感と高待遇を両立したい層に絶大な人気。
「人を大切にする」文化が浸透しており、離職率が極めて低く、長期的なキャリア形成が可能。`
    },
    {
        name: `SEC`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.sec.co.jp/recruit/recruit.html`,
        salary: `677(410)`,
        employees: 350,
        memo: `「社会の安全に貢献する」リアルタイム技術のスペシャリスト集団。
宇宙探査機、自律走行ロボット、防衛など、極めて高度な技術力が求められる案件に特化。
平均年収は約677万。少数精鋭で、技術そのものを楽しむ「職人」気質なエンジニアが多い。
特定のメーカーに属さない独立系。AI×ロボティクスの先端研究にも積極的な技術志向企業。`
    },
    {
        name: `SEPTENI`,
        industry: `広告`,
        category: `広告・デジタルマーケティング`,
        url: `https://www.septeni-holdings.co.jp/recruitment/`,
        salary: `516(430)`,
        employees: 1500,
        memo: `国内屈指のデジタル広告代理店。電通グループ入りし、データ活用の幅を拡大中。
新卒は想定年収430万〜。AIによる配属予測や人事評価など、自社内でもDXを徹底。
「アントレプレナーシップ」を重視し、若手のうちから裁量の大きな仕事を任される。
クリエイティブとテクノロジーを融合させた、次世代の広告手法を学べるモダンな環境。`
    },
    {
        name: `SHARP`,
        industry: `メーカー`,
        category: `ハードウェア・精密機器`,
        url: `https://corporate.jp/sharp/recruit/`,
        salary: `753(400)`,
        employees: 43000,
        memo: `「目指してる、未来がちがう。」鴻海グループ傘下で経営再建と成長の両立へ。
平均年収は約753万。初任給は25万(大卒)〜28.4万(院卒)。実力主義の評価体系へ移行。
2026年度はAI家電やスマートオフィス, 次世代ディスプレイの社会実装に注力。
大阪・堺を拠点とし、グローバルな生産・販売網を活用したダイナミックなモノづくり。`
    },
    {
        name: `SHIFT`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://recruit.shiftinc.jp/new_graduate/`,
        salary: `605(400)`,
        employees: 12000,
        memo: `「売れるサービスを作る」ための品質保証(QA)で急成長を続ける異色のIT企業。
平均年収は約605万。昇給率が平均10%超と高く、成果がダイレクトに給与へ反映される。
年俸制を採用。検定に合格すれば給与が上がる「検定昇給」など、独自の仕組みが豊富。
単なるテスト会社から、上流のDXコンサルへと領域を拡大。圧倒的なスピード感を好む層へ。`
    },
    {
        name: `SHIMADZU`,
        industry: `メーカー`,
        category: `ハードウェア・精密機器`,
        url: `https://www.shimadzu.co.jp/aboutus/recruit/graduate/information/`,
        salary: `978(440)`,
        employees: 14000,
        memo: `「科学技術で社会に貢献する」。分析計測機器で世界トップクラスの技術を保有。
平均年収は約978万。初任給26万(大卒)〜27万(修士)。京都を代表する超優良企業。
田中耕一氏を擁する研究開発力が最大の武器。ヘルスケアや環境・エネルギー分野に注力。
「誠実・堅実」な社風。福利厚生が極めて手厚く、落ち着いて研究・開発に没頭できる。`
    },
    {
        name: `SHINKO`,
        industry: `メーカー`,
        category: `半導体・製造装置`,
        url: `https://www.shinko.co.jp/recruit/`,
        salary: `687(360)`,
        employees: 5600,
        memo: `富士通グループの半導体パッケージ大手。AIサーバー向けの需要爆発で業績好調。
平均年収は約687万。2026年度初任給はエンジニア職で月26.3万円〜。
長野県を拠点に、世界最高水準の微細加工・放熱技術でIntel等の世界企業を支える。
半導体の進化を「材料・パッケージ」から牽引。地域社会への貢献度も高い安定企業。`
    },
    {
        name: `SIGMAXYZ`,
        industry: `コンサルティング`,
        category: `DX・ITコンサルティング`,
        url: `https://www.sigmaxyz.com/recruit/index.html`,
        salary: `1170(600)`,
        employees: 600,
        memo: `三菱商事とRHJの合弁から生まれた「事業を創る」コンサルティングファーム。
新卒初年度から「年俸600万円」を提示する国内トップ級の待遇。平均年収も1100万超。
単なるアドバイスではなく、顧客と投資やJV設立を行う「パートナー」としての立ち位置。
シェルパ(伴走者)として、多様な専門家がフラットに協働。自由で創造的な文化が特徴。`
    },
    {
        name: `Sky`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.sky-recruit.jp/internship/`,
        salary: `781(520)`,
        employees: 3800,
        memo: `「好働力(こうどうりょく)」を掲げる、圧倒的スピードで急成長中の独立系SIer。
2026年度初任給は修士32.8万、博士35.5万と異次元の水準。実力主義による抜擢が多い。
学習管理「SKYMENU」や企業向け「SKYSEA」など自社開発プロダクトも非常に強力。
全社一丸となって目標を追う「部活動」のような熱い社風。社員同士の繋がりが極めて密。`
    },
    {
        name: `Smaregi`,
        industry: `Web・ネットサービス`,
        category: `SaaS・業務効率化`,
        url: `https://corp.smaregi.jp/recruit/`,
        salary: `550(360)`,
        employees: 250,
        memo: `クラウド型POSレジ「スマレジ」を運営。店舗のDXとキャッシュレス化を牽引。
新卒初任給は月25万〜(年360万相当)。開発拠点は大阪と東京。
2026年度は、AIによる売上分析や在庫最適化機能を強化し、導入店舗数が急増中。
「いい未来をつくる」を掲げる。自由でフラット、かつ技術研鑽を尊ぶエンジニア文化。`
    },
    {
        name: `SmartHR`,
        industry: `Web・ネットサービス`,
        category: `SaaS・業務効率化`,
        url: `https://recruit.smarthr.co.jp/newgrads/`,
        salary: `693(460)`,
        employees: 1000,
        memo: `クラウド人事労務ソフト国内シェアNo.1。2026年時点でも圧倒的な成長を維持。
平均年収は約693万。新卒想定年収は460万〜。中央値も600万超とSaaS界で高水準。
「社会の非合理を、ハックする。」 心理的安全性が高く、情報の透明性を徹底する社風。
六本木グランドタワーの最新オフィス。自律的なキャリア形成と、個人の裁量を尊重。`
    },
    {
        name: `SmartNews`,
        industry: `Web・ネットサービス`,
        category: `SNS・メディア・コンテンツ`,
        url: `https://careers.smartnews.com/ja/`,
        salary: `950(500)`,
        employees: 500,
        memo: `世界中に良質な情報を届けるニュースアプリ。日本と米国の2市場で急成長。
新卒想定年収は約500万〜。エンジニア職はスキルに応じ1,000万超の提示もあり。
平均年収は約950万。GoogleやFacebook出身の超優秀なエンジニアが多く在籍。
「世界をつなぐ」ニュース。英語が飛び交う多国籍な環境。フリーランチ等の福利厚生。`
    },
    {
        name: `SMC`,
        industry: `メーカー`,
        category: `産業用ロボット・FA`,
        url: `https://smcrecruit.smcworld.com/`,
        salary: `853(420)`,
        employees: 23000,
        memo: `空気圧制御機器で世界シェア約4割。超高収益なB2Bメーカーの雄。
平均年収は約853万。2026年度初任給は25.5万(大卒)〜28万(修士)レンジへ引き上げ。
自動車、半導体、医療など、あらゆる工場の自動化に不可欠な精密機器を供給。
堅実で安定した経営。自己資本比率が極めて高く、福利厚生やボーナス水準も非常に高い。`
    },
    {
        name: `SMS`,
        industry: `Web・ネットサービス`,
        category: `ヘルスケア・メディカル`,
        url: `https://www.bm-sms.co.jp/recruit/`,
        salary: `513(450)`,
        employees: 4000,
        memo: `「高齢社会に適した情報インフラを構築する」。18期連続増収増益の超安定成長企業。
新卒初任給は27.1万(年約450万相当)。平均年収は有報ベースで513万だが、外販や企画職はより高額。
介護ソフト「カイポケ」や医療系求人「ナース人材バンク」など、業界シェアトップ級を多数保有。
「ゴール至上主義」。論理的思考と成果へのコミットを重視する、コンサル的な文化。`
    },
    {
        name: `SoftBan`,
        industry: `通信・ネットワークインフラ`,
        category: `通信キャリア・ISP`,
        url: `https://www.softbank.jp/recruit/graduate/`,
        salary: `820(480)`,
        employees: 50000,
        memo: `「情報革命で人々を幸せに」。通信を基盤にAI、金融、宇宙、自動運転へ全方位展開。
2026年度初任給は大卒27.2万、修士29.2万。高度IT人材枠は年収1,000万〜の提示もあり。
LINEヤフー、PayPay等のグループシナジーを強化。平均年収は800万超へ。
「スピード・挑戦・No.1」を尊ぶ実力主義。副業OK、サテライトオフィス等、働き方も最先端。`
    },
    {
        name: `SOLXYZ`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.solxyz.co.jp/newgraduate/`,
        salary: `580(380)`,
        employees: 600,
        memo: `金融業界（特に証券・銀行）に強い独立系SIer。東証プライム上場。
新卒初任給は23万(大卒)〜25万(院卒)。30代前半で年収500〜600万レンジが標準。
自社クラウドサービス「Fleekdrive」を展開。近年はAI・IoTによる農業DXも手がける。
研修や資格取得支援が非常に手厚い。穏やかな社風で、着実にエンジニアスキルを磨ける。`
    },
    {
        name: `SOMPO`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.sompo-sys.com/recruit/`,
        salary: `631(410)`,
        employees: 1767,
        memo: `SOMPOホールディングスのIT戦略中核。巨大な保険インフラを支える。
平均年収は約631万。新卒想定年収は約410万(残業込で1年目500万近くも)。
2026年は「安心・安全・健康のテーマパーク」の実現に向け、ヘルスケアDXを加速。
有休取得率が高く、ワークライフバランスは抜群。金融系ならではの安定性と手厚い福利厚生。`
    },
    {
        name: `SONY`,
        industry: `メーカー`,
        category: `ハードウェア・精密機器`,
        url: `https://www.sony.com/ja/SonyInfo/Jobs/sgc-recruit/`,
        salary: `1118(580)`,
        employees: 110000,
        memo: `「クリエイティビティとテクノロジーの力で、世界を感動で満たす」。日本を代表するテック企業。
平均年収がついに1,100万を突破。2026年度初任給は32.3万(大卒)〜35.3万(修士)と国内最高峰。
ジョブ型雇用を徹底。CMOSセンサー、金融、映画、音楽、半導体の全方位で世界と戦う。
「出る杭を打たない」自由闊達な文化。個人の意志でキャリアを築く「社内募集制度」が活発。`
    },
    {
        name: `SONY Interactive Entertainment`,
        industry: `Web・ネットサービス`,
        category: `エンタメ・ゲーム・VOD`,
        url: `https://www.sie.com/jp/saiyo/newgrad/`,
        salary: `950(510)`,
        employees: 4000,
        memo: `PlayStationプラットフォームを運営する、世界最高峰 of ゲームパブリッシャー。
平均年収は900万超。新卒は大卒月給27万〜。ソニーグループ共通の高待遇と福利厚生。
ハードウェア開発から「God of War」等のソフト制作、PSNのサービス運営まで多角展開。
グローバルな開発体制。英語を活かせる環境。ゲームの未来を創るという圧倒的な誇り。`
    },
    {
        name: `Sony Network Communications`,
        industry: `通信・ネットワークインフラ`,
        category: `通信キャリア・ISP`,
        url: `https://job.rikunabi.com/2026/company/r632010045/`,
        salary: `780(430)`,
        employees: 1000,
        memo: `ソニーグループの通信中核。超高速回線「NURO 光」や「So-net」を展開。
2026年度初任給は25.5万(大卒)〜29.4万(院卒)に引き上げ。ソニー基準の高待遇。
ISPの枠を超え、AI・予測分析ツール「Prediction One」やIoT事業を強力に推進。
ソニーグループ共通の「自由闊達」な社風。テレワークや副業、社内募集制度が活発。`
    },
    {
        name: `SORACOM`,
        industry: `Web・ネットサービス`,
        category: `クラウド・インフラ・セキュリティ`,
        url: `https://soracom.com/ja/hr`,
        salary: `1150(550)`,
        employees: 150,
        memo: `「世界をつなぐ」IoTプラットフォームのグローバルリーダー。KDDIグループ。
平均年収は約1150万。新卒想定年収は約550万〜。エンジニアは世界トップ級の精鋭。
2026年はエッジAIや衛星通信との連携を加速。160ヶ国以上で利用される高い技術力。
Amazon(AWS)の文化を継承。少数精鋭、フラット、かつ徹底的な「コトに向かう」文化。`
    },
    {
        name: `Speee`,
        industry: `Web・ネットサービス`,
        category: `建設・不動産DX\n広告・デジタルマーケティング`,
        url: `https://speee.jp/recruit/`,
        salary: `580(500)`,
        employees: 480,
        memo: `「解きにいく。」を掲げ、不動産やリフォームなど非効率な市場をDXで変革。
新卒初任給は35万(年500万〜)から。実力主義で、20代後半でのマネージャー昇進も多い。
平均年齢29歳と若く、論理的思考と圧倒的な当事者意識が求められるメガベンチャー。
データサイエンスを駆使した事業開発に強み。六本木を拠点とし、挑戦を称賛する社風。`
    },
    {
        name: `SQUARE ENIX`,
        industry: `Web・ネットサービス`,
        category: `エンタメ・ゲーム・VOD`,
        url: `https://www.jp.square-enix.com/recruit/fresh/`,
        salary: `596(400)`,
        employees: 3000,
        memo: `日本を代表するゲームパブリッシャー。FF、ドラクエなどの世界的IPを保有。
平均年収は約596万。新卒想定年収は約400万(院卒420万〜)。職種別の評価が手厚い。
2026年は「Web3・AI活用」による次世代エンタメ開発と、グローバルパブリッシングを強化。
開発環境は国内最高峰。クリエイター、エンジニアのこだわりを最大限尊重する文化。`
    },
    {
        name: `STNet`,
        industry: `通信・ネットワークインフラ`,
        category: `通信キャリア・ISP\nクラウド・インフラ・セキュリティ`,
        url: `https://www.stnet.co.jp/saiyou/`,
        salary: `580(380)`,
        employees: 800,
        memo: `四国電力グループのIT・通信中核。光ネット「Pikara」やデータセンターを展開。
2026年度初任給は23.2万(大卒)〜24.5万(院卒)に引き上げ。四国エリア屈指の安定企業。
「Powerico」をはじめとする国内最高水準のデータセンターと、地域DX支援に強み。
四国電力グループの手厚い福利厚生。地元に貢献しつつ、先端ITに携われる環境。`
    },
    {
        name: `STORES`,
        industry: `Web・ネットサービス`,
        category: `Webプラットフォーム・EC\nSaaS・業務効率化`,
        url: `https://jobs.st.inc/`,
        salary: `680(480)`,
        employees: 450,
        memo: `「Just for Fun」を掲げ、中小ショップのデジタル化を全方位で支援。
平均年収は約680万。新卒想定年収は約480万〜。中途エンジニアは1,000万超も多い。
ネットショップ作成、キャッシュレス決済、POSレジを1つのIDで繋ぐエコシステム。
自律を重んじる文化。プロダクト志向が強く、ユーザー体験を第一に考える集団。`
    },
    {
        name: `SUMCO`,
        industry: `メーカー`,
        category: `半導体・製造装置`,
        url: `https://www.sumcosi.com/recruit/`,
        salary: `667(512)`,
        employees: 9000,
        memo: `半導体の基板となるシリコンウェーハで世界2強の一角。超高収益な素材メーカー。
2026年度新卒初任給は32万(院卒)と異次元の引き上げ。1年目年収500万超も。
平均年収は約667万だが、近年の半導体需要増に伴いボーナス水準が急騰している。
「世界一のウェーハ」を作る技術への拘り。佐賀・伊万里を拠点に世界を支える。`
    },
    {
        name: `systena`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://recruit.systena.co.jp/`,
        salary: `474(400)`,
        employees: 5500,
        memo: `「日本をITで元気に」。モバイル開発から金融、車載、DXまで手がける独立系SIer。
平均年収は約474万。若手比率が高いため平均は控えめだが、実力主義で昇進は速い。
新卒は月24.5万〜(年400万相当)。充実した研修センターでの教育体制に定評がある。
特定のベンダーに縛られない。2026年はAI活用による自動化ソリューションに注力。`
    },
    {
        name: `TAIYO YUDEN`,
        industry: `メーカー`,
        category: `産業用ロボット・FA`,
        url: `https://www.yuden.co.jp/jp/recruit/newly/`,
        salary: `628(410)`,
        employees: 22000,
        memo: `コンデンサ(MLCC)で世界トップクラス。EVやスマホに不可欠な受動部品の雄。
平均年収は約628万。2026年度初任給は25.0万(大卒)〜27.3万(院卒)に引き上げ。
「材料からのモノづくり」に強み。次世代の全固体電池や車載通信モジュールへ投資中。
誠実でアットホームな社風。群馬県や東京に拠点を置き、グローバルに製品を供給。`
    },
    {
        name: `TCS`,
        industry: `ITサービス・SIer`,
        category: `DX・ITコンサルティング\nSIer（システム開発・運用）`,
        url: `https://www.tcs.com/jp-ja/careers/new-graduate-recruitment`,
        salary: `641(475)`,
        employees: 4500,
        memo: `世界最大級のIT企業(Tata)と三菱商事の合弁。グローバルと日系のハイブリッド。
新卒初任給は33.8万(年475万＋入社一時金100万)と極めて高い。平均年収も急上昇中。
インド等の世界拠点と連携した大規模オフショア開発や、最上流のDXコンサルに強み。
「ハイブリッド・アジャイル」開発が標準。英語を活かして世界を舞台に働ける。`
    },
    {
        name: `TDC SOFT`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.tdc.co.jp/jobs/recruit/freshers/`,
        salary: `622(400)`,
        employees: 1800,
        memo: `金融業界のシステム開発に強みを持つ、設立60年超の老舗独立系SIer。
新卒初任給は25万(大卒)〜27万(院卒)。一律3万円の住宅手当が全社員に支給される。
アジャイル開発の国内先駆者であり、SalesforceやAWS等のクラウド導入支援も強化中。
「次世代型SIer」への転換を掲げ、モダンな開発環境と働きやすさの両立を推進。`
    },
    {
        name: `teamLab`,
        industry: `Web・ネットサービス`,
        category: `SNS・メディア・コンテンツ`,
        url: `https://www.team-lab.com/recruit/fresh/`,
        salary: `570(400)`,
        employees: 800,
        memo: `サイエンス・テクノロジー・デザインの境界を越えるクリエイティブ集団。
新卒想定年収は約400万〜。スキル評価次第で早期に600万〜1,000万超も可能な実力主義。
デジタルアート「チームラボボーダレス」等の展示に加え、企業のWeb/DX制作も多数。
肩書きや役職がない「扁平な組織」が特徴。自由で発想でモノづくりに没頭できる環境。`
    },
    {
        name: `TDK`,
        industry: `メーカー`,
        category: `産業用ロボット・FA`,
        url: `https://www.tdk.com/ja/careers/graduates/`,
        salary: `1063(440)`,
        employees: 103000,
        memo: `フェライトコアを源流とする電子部品の巨人。スマホ向け小型電池で世界首位級。
平均年収がついに1,000万を突破。初任給も26.5万(大卒)〜29.5万(修士)と高水準。
2026年度は電気自動車(EV)やAI向けの高機能受動部品への投資を過去最大規模で実施。
海外売上比率が9割超。秋田と東京を拠点に、世界最先端のエネルギー・通信インフラを支える。`
    },
    {
        name: `TEL`,
        industry: `メーカー`,
        category: `半導体・製造装置`,
        url: `https://tel-special.com/`,
        salary: `1354(560)`,
        employees: 16000,
        memo: `半導体製造装置で国内首位、世界3位。2026年度も半導体需要増により過去最高益を更新。
大卒初任給を一気に「30万円」へ引き上げ。年収1,000万超えの社員が続出する高年収企業。
ボーナス比率が極めて高く、業績連動で爆発的に増える。地域手当や住宅補助も国内トップ級。
「最先端の知的好奇心」を満たす開発環境。世界中の半導体メーカーと最先端プロセスを共創。`
    },
    {
        name: `TerraSky`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://newgrad.terrasky.co.jp/`,
        salary: `600(402)`,
        employees: 600,
        memo: `クラウド導入支援の先駆者。特にSalesforceの認定エンジニア数は国内屈指。
新卒は年俸制402万(月33.5万)〜。固定残業30hを含むが、超過分は別途支給。
自社プロダクト「mitoco」や、金融・流通等の大規模クラウド移行プロジェクトに強み。
「クラウド・バイ・デフォルト」を体現。最新のSaaS/PaaSに触れながら最速で成長できる環境。`
    },
    {
        name: `TIS`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）\n金融・フィンテック`,
        url: `https://www.tis.co.jp/`,
        salary: `807(510)`,
        employees: 21000,
        memo: `日本最大級の独立系SIer。クレジットカード決済システムで国内シェアNo.1。
2026年度初任給は30万(大卒)〜31.2万(院卒)へ急増。30代前半で1,000万超も可能に。
「支払い」のDXを軸に、AIやロボティクス領域への投資を加速。東南アジア展開も強力。
副業可、テレワーク標準。大手ながら挑戦を称賛する文化があり、新卒の人気も急上昇中。`
    },
    {
        name: `TOSHIBA`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）\nAI・データサイエンス`,
        url: `https://www.global.toshiba/jp/company/digitalsolution/recruit/guideline/shinsotsu.html`,
        salary: `736(430)`,
        employees: 10000,
        memo: `東芝グループのIT事業中核。産業・社会インフラの知見とITを融合させたソリューション。
2026年度初任給は約27万〜29万。東芝本体に準ずる安定した給与・福利厚生が魅力。
量子コンピュータ(シミュレーテッド・アニーリング)や独自のAI技術を現場実装。
再編を経て、データ利活用によるストック型ビジネス(リカーリング)への転換を急ピッチで推進。`
    },
    {
        name: `TOYOTA SYSTEMS`,
        industry: `ITサービス・SIer`,
        category: `自動車・モビリティ・重工業\nSIer（システム開発・運用）`,
        url: `https://www.toyotasystems.com/recruit/`,
        salary: `750(460)`,
        employees: 4800,
        memo: `トヨタグループのIT戦略中核。クルマを「移動のプラットフォーム」へ変える。
2026年度初任給は27万(大卒)〜29万(院卒)。トヨタ自動車に準ずる最高水準の安定性。
コネクティッド、自動運転、サプライチェーン最適化など、世界規模のモビリティDXを担う。
名古屋と東京に拠点を置き、住宅補助や研修制度が極めて手厚い。トヨタ流のモノづくりをITで体現。`
    },
    {
        name: `TREND`,
        industry: `ITサービス・SIer`,
        category: `クラウド・インフラ・セキュリティ`,
        url: `https://www.trendmicro.com/ja_jp/about/careers.html`,
        salary: `900(496)`,
        employees: 7000,
        memo: `日本発のグローバルセキュリティ大手。法人向け・クラウド向け保護で世界トップ級。
平均年収は約900万。新卒は年俸制500万前後からスタートし、成果に応じた昇給。
2026年は「AIによる脅威検知(Trend Vision One)」を全産業へ実装し、収益を拡大。
多国籍なメンバーが集い、英語が飛び交う外資系に近い社風。サイバーセキュリティの最前線。`
    },
    {
        name: `TSUZUKI`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.tsuzuki.co.jp/recruit/newgraduate/`,
        salary: `730(380)`,
        employees: 2300,
        memo: `創業90年超。富士通系ディーラー最大手でありながら、自社ソリューションにも強み。
平均年収は約730万。賞与が年2回しっかり支給され、30代で700万到達が一般的。
「つなぐ」をテーマに、ICT基盤構築からAI・IoT活用までトータルプロデュース。
穏やかで人の良い社員が多く、研修制度が非常に手厚い。「就職白書」で働きやすさも高評価。`
    },
    {
        name: `Ubie`,
        industry: `Web・ネットサービス`,
        category: `ヘルスケア・メディカル`,
        url: `https://recruit.ubie.life/top`,
        salary: `1050(600)`,
        employees: 300,
        memo: `「テクノロジーで人々を適切な医療に導く」AI受診相談のユニコーン候補。
平均年収は約1,050万。新卒想定年収も600万〜とスタートアップ界でトップ級。
医師の知見とAIを融合した問診プラットフォームが国内外で急成長中。
完全にフラットで自律的な組織「ホラクラシー」を導入。卓越したスキルを求める精鋭集団。`
    },
    {
        name: `U-NEXT`,
        industry: `Web・ネットサービス`,
        category: `エンタメ・ゲーム・VOD`,
        url: `https://recruit.unext-hd.co.jp/`,
        salary: `580(330)`,
        employees: 5000,
        memo: `国内最大級の映像配信「U-NEXT」を中核に、USEN等の店舗DXや通信を展開。
2026年度新卒は年俸制。初年度は月給27万〜。1年目年収は約330〜350万想定。
映画、ドラマ、アニメ、雑誌を1アプリで提供する独自の戦略で会員数が好調に推移。
スピード感のある多角化経営。青山や目黒のモダンなオフィスで、自由な働き方を推進。`
    },
    {
        name: `UNIRITA`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://recruit.unirita.co.jp/requirement/new_graduates/`,
        salary: `683(450)`,
        employees: 600,
        memo: `設立40年超、東証スタンダード上場の老舗独立系SIer。
2026年度初任給を一気に「月29.4万円」へ引き上げ、若手の待遇を大幅改善。
メインフレーム運用管理からクラウド、サブスク型SaaSへのビジネス転換に成功。
品川を拠点とし、残業月10h程度とWLBも良好。誠実で技術を大切にする社風。`
    },
    {
        name: `UUUM`,
        industry: `Web・ネットサービス`,
        category: `SNS・メディア・コンテンツ`,
        url: `https://recruit.uuum.co.jp/`,
        salary: `545(288)`,
        employees: 500,
        memo: `HIKAKIN氏等が在籍する、国内最大手のYouTuber事務所。現在はフリード傘下。
平均年収は約545万。新卒初任給は24万(年約288万相当)。実力次第で抜擢あり。
インフルエンサーのマネジメントから、ブランド開発、動画広告まで多角化中。
「コドモゴコロ」を忘れないクリエイティブな社風。エンタメの最前線で働ける。`
    },
    {
        name: `UZABASE`,
        industry: `Web・ネットサービス`,
        category: `SNS・メディア・コンテンツ`,
        url: `https://www.uzabase.com/jp/careers/`,
        salary: `759(450)`,
        employees: 900,
        memo: `「経済情報で、世界を変える」。NewsPicksやSPEEDAを運営するSaaS企業。
平均年収は約759万。新卒想定年収は約450万〜。中途エンジニアは1000万超も多い。
2026年度はB2B向けAIエージェント事業が急成長中。情報の価値を最大化する集団。
「自由主義で行こう」を掲げる。フルリモート、フルフレックス、副業可の超柔軟な組織。`
    },
    {
        name: `VALUE COMMERCE`,
        industry: `広告`,
        category: `広告・デジタルマーケティング`,
        url: `https://www.valuecommerce.co.jp/sitemap/`,
        salary: `637(420)`,
        employees: 400,
        memo: `日本初のASP(アフィリエイトサービス)プロバイダー。LINEヤフーグループ。
平均年収は約637万。新卒初任給は24.6万〜26.3万。安定した収益基盤と高待遇。
蓄積された膨大な購買データを活用した、高精度なリターゲティング広告に強み。
平均残業20h以下、有休消化率高。グループの安定性とベンチャー気質が同居する。`
    },
    {
        name: `VISIONAL`,
        industry: `Web・ネットサービス`,
        category: `教育・HR・人材`,
        url: `https://newgrads.visional.inc/`,
        salary: `854(550)`,
        employees: 1600,
        memo: `「ビズリーチ」を筆頭に、HRテックやM&A支援を展開。高収益なメガベンチャー。
平均年収は約854万。新卒(エンジニア)想定年収は550万〜と国内トップクラス。
2026年度は人的資本経営ブームに乗り「HRMOS」の導入社数が急拡大中。
「新しい可能性を、次々と。」を体現。自律的なキャリアを推奨する、成長意欲の高い組織。`
    },
    {
        name: `WingArc 1st`,
        industry: `ITサービス・SIer`,
        category: `SaaS・業務効率化`,
        url: `https://corp.wingarc.com/recruit/index.html`,
        salary: `756(410)`,
        employees: 750,
        memo: `帳票ソフトウェア「SVF」で国内シェア約7割。データ活用のプロ集団。
平均年収は約756万。2026年度初任給は26.6万(大卒)〜28.2万(院卒)に設定。
2026年は「帳票DX」を核に、電子取引プラットフォーム事業が成長を牽引。
「Empower Data, Innovate the Business」。働きがいのある会社(GPTW)常連。`
    },
    {
        name: `WORKS APPLICATIONS`,
        industry: `ITサービス・SIer`,
        category: `SaaS・業務効率化`,
        url: `https://www.worksap.co.jp/career/`,
        salary: `680(500)`,
        employees: 2500,
        memo: `「日本の大手企業をITで強くする」。統合ERP「HUE」を展開する老舗SaaS。
新卒想定年収は500万〜。職種別・グレード別の明確な評価により、若手でも高年収が可能。
2026年度はAIによる業務自動化を全モジュールに実装。製品力が再び高く評価されている。
「クリティカル・ワーカー」を求める文化。ロジカルで当事者意識の強い人材が集まる。`
    },
    {
        name: `WORLD INTEC`,
        industry: `サービス`,
        category: `教育・HR・人材`,
        url: `https://recruit.witc.co.jp/`,
        salary: `480(330)`,
        employees: 18000,
        memo: `ワールドホールディングス中核。製造、半導体、研究職の派遣・請負に強み。
2026年度初任給を大幅引き上げ。大卒22.4万〜、修士23.3万〜。住宅補助が極めて手厚い。
半導体や医薬など成長産業の「現場のプロ」を育成。入社後の社内研修が非常に充実。
現場からマネジメント、コンサルタントへのキャリアチェンジを支援する制度も活発。`
    },
    {
        name: `WOWOW`,
        industry: `通信・ネットワークインフラ`,
        category: `エンタメ・ゲーム・VOD`,
        url: `https://recruit.wowow.co.jp/newgraduate/`,
        salary: `1077(450)`,
        employees: 307,
        memo: `日本初の民間衛星有料放送局。映画、音楽、スポーツの独占配信に強み。
平均年収は約1,077万。初任給は22.8万だが、ボーナス比率が高く1年目年収は450万想定。
2026年度は「WOWOWオンデマンド」を核に、独自IP製作やスポーツ配信を強化。
少数精鋭で、コンテンツ制作からマーケ、配信技術までクリエイティブな挑戦が可能。`
    },
    {
        name: `YASKAWA`,
        industry: `メーカー`,
        category: `産業用ロボット・FA`,
        url: `https://www.yaskawa.co.jp/recruit/`,
        salary: `842(430)`,
        employees: 14000,
        memo: `産業用ロボット「MOTOMAN」やインバータで世界をリードする、北九州の巨人。
平均年収は約842万。初任給は25万(大卒)〜28万(修士)レンジに引き上げ。
「i3-Mechatronics」を掲げ、AIやデータ活用による工場の自動化を強力に推進。
海外売上比率が非常に高く、世界各国の製造現場を支えるやりがいは大きい。`
    },
    {
        name: `YOKOGAWA`,
        industry: `メーカー`,
        category: `産業用ロボット・FA`,
        url: `https://www.yokogawa.co.jp/recruit/freshers/`,
        salary: `927(420)`,
        employees: 17000,
        memo: `プラントの制御・自動化（IA）で世界屈指。ノーベル賞技術の応用にも強み。
平均年収は約927万。初任給24万(大卒)〜26万(修士)だが、賞与と手当が手厚い。
2026年度は「産業の自律化(IA2IA)」や、環境・バイオ領域の新規事業を加速。
有休取得率が高く、男性育休やテレワークも定着。「穏やかで知的」な社風。`
    },
    {
        name: `YAMAHA MOTOR`,
        industry: `メーカー`,
        category: `自動車・モビリティ・重工業`,
        url: `https://global.yamaha-motor.com/jp/recruit/graduates/student/`,
        salary: `782(410)`,
        employees: 53000,
        memo: `「感動創造」。二輪車世界2位。ボート、船外機、表面実装機でも世界首位級。
平均年収は約782万。静岡県磐田市を拠点とする、国内有数の優良ホワイトメーカー。
2026年度は「電動化」と「自動航行」に注力。海外売上比率が9割を超え、グローバル志向。
自由で挑戦的な風土。福利厚生（社宅、保養所等）が極めて充実し、定着率も高い。`
    },
    {
        name: `zozo`,
        industry: `Web・ネットサービス`,
        category: `Webプラットフォーム・EC`,
        url: `https://corp.zozo.com/recruit/`,
        salary: `695(450)`,
        employees: 1600,
        memo: `日本最大級のファッションEC「ZOZOTOWN」を運営。LINEヤフーグループ。
新卒初年度は月30万(年450万想定)から。エンジニア専門職は最高1000万超も。
2026年度はAIによるパーソナライズ提案や、美容(ZOZOCOSME)のAR試着を強化。
「海辺の幕張」を拠点とする自由な社風。私服、リモート、副業OKのモダンな環境。`
    },
    {
        name: `アイネス`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://ines-recruit.jp/recruit/newgraduate.html`,
        salary: `704(410)`,
        employees: 915,
        memo: `地方自治体向けの住民情報システムで高シェアを持つ、三菱総合研究所のパートナー。
平均年収は約704万。新卒初任給は24万(大卒)〜25万(修士)程度。
自治体、金融、製造など、公共性が高い大規模な社会インフラをITで支える。
「人を育てる」文化が根強く、平均勤続18年超とSIer業界では極めて高い定着率。`
    },
    {
        name: `アクセンチュア`,
        industry: `コンサルティング`,
        category: `DX・ITコンサルティング`,
        url: `https://www.accenture.com/jp-ja/careers/life-at-accenture/entry-level`,
        salary: `950(663)`,
        employees: 19000,
        memo: `世界最大級の総合ファーム。2026年度新卒年俸は戦略系で663万〜とトップ級。
平均年収は約950万だが、マネージャー昇進で1200万〜1500万が射程に入る。
AI(Generative AI)を全社的に実装し、企業のビジネスモデル変革を最上流から支援。
ハードな印象から一転、現在は「働き方改革」を徹底。実力主義で若手の成長が速い。`
    },
    {
        name: `アルファシステムズ`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.alpha.co.jp/recruit/`,
        salary: `615(400)`,
        employees: 3000,
        memo: `通信メーカー開発に圧倒的な強み。NTTグループ等の主要ベンダー。
新卒初任給は24.1万(大卒)＋地域手当等。住宅補助（本人契約時4.6万）が非常に手厚い。
官公庁や教育、医療などミッションクリティカルな開発案件が多く、安定性抜群。
「技術は嘘をつかない」を掲げ、資格取得支援や技術研修が非常に充実した社風。`
    },
    {
        name: `オービック`,
        industry: `ITサービス・SIer`,
        category: `SaaS・業務効率化`,
        url: `https://www.obic.co.jp/recruit/newgraduate/information/profile.html`,
        salary: `1103(510)`,
        employees: 927,
        memo: `統合業務ソフト(ERP)「OBIC7」で国内首位。28期連続で最高益更新を目指す怪物企業。
平均年収がついに1,100万を突破。新卒初任給も33万(年510万相当)とSIer界最高峰。
コンサルから開発、サポートまで自社一気通貫。営業利益率約60%という超高収益。
「少数精鋭」の実力主義。若手のうちから経営者と対等に渡り合う営業力が身につく。`
    },
    {
        name: `大塚商会`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://jinzai.otsuka-shokai.co.jp/shinsotsu/`,
        salary: `993(430)`,
        employees: 7600,
        memo: `「ITのワンストップサービス」。国内中小企業のIT導入シェアで圧倒的1位。
平均年収は約993万。新卒初任給27.4万(年約430万相当)。成果報酬による加算が大きい。
2026年度はAIによる業務効率化「AI-OCR/RPA」などの外販が急成長中。
圧倒的な営業力が武器。教育体制が万全で、ITと営業の基礎を徹底的に叩き込まれる。`
    },
    {
        name: `川崎重工業`,
        industry: `メーカー`,
        category: `自動車・モビリティ・重工業`,
        url: `https://www.khi-saiyo.jp/`,
        salary: `793(480)`,
        employees: 17397,
        memo: `陸・海・空から宇宙まで。水素エネルギーや医療用ロボットにも注力。
2026年度初任給は26万(大卒)〜28.1万(院卒)。重工3社の一角として高い安定性。
平均年収は約793万。30歳前後で年収600万超、主事昇進で1,000万超も可能。
福利厚生が極めて充実。社宅、独身寮、カフェテリアプランなど、生活コストを抑えられる。`
    },
    {
        name: `さくらケーシーエス`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.kcs.co.jp/recruit/freshers.html`,
        salary: `695(420)`,
        employees: 1000,
        memo: `SMBCグループのIT中核。銀行、公共、産業など幅広いシステム基盤を支える。
新卒初任給は月25万〜(年420万相当)。平均年収は約695万と、中堅SIerでトップ級。
10期連続赤字なし。金融系ならではの堅実さと、最新のセキュリティ・クラウド技術に強み。
兵庫・神戸を拠点とする地元志向の強い層にも人気。充実した研修と安定した昇給体系。`
    },
    {
        name: `鈴与シンワート`,
        industry: `ITサービス・SIer`,
        category: `物流・流通インフラ`,
        url: `https://recruit.shinwart.co.jp/`,
        salary: `652(410)`,
        employees: 628,
        memo: `鈴与グループのIT中核。人事給与アウトソーシングやデータセンター事業に強み。
平均年収は約652万。新卒想定年収は約410万〜。30代前半で500万超、40代で700万到達。
自社SaaS「S-PAYCIAL」等の高収益事業を保有。物流×ITの知見は国内屈指。
有休取得率が高く、穏やかでアットホームな社風。資格取得への奨励金も充実している。`
    },
    {
        name: `スカパーJSAT`,
        industry: `通信・ネットワークインフラ`,
        category: `エンタメ・ゲーム・VOD`,
        url: `https://newgraduate-sptvjsat.com/`,
        salary: `1273(530)`,
        employees: 819,
        memo: `アジア最大の衛星通信と「スカパー！」を運営。2026年は「宇宙事業」で再成長。
平均年収は約1,273万と国内トップ級。新卒想定年収も500万超。30代で1,000万超が可能。
衛星からのデータ利活用、宇宙デブリ除去など、SFのような最先端プロジェクトが豊富。
少数精鋭。住宅補助（月数万〜）等の福利厚生も手厚く、ワークライフバランスの満足度が高い。`
    },
    {
        name: `住友電工情報システム`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.sei-info.co.jp/recruit/`,
        salary: `640(480)`,
        employees: 550,
        memo: `住友電工グループのIT中核。自社パッケージ「楽々Framework」は業界で圧倒的知名度。
2026年度初任給は月28.6万(大卒)〜30.1万(修士)と、SIer業界で最高水準。
平均年収は約640万。残業月平均20h以内を徹底。実質的な可処分所得が高い「隠れ優良」。
大阪と東京の2拠点。メーカー系らしい誠実なモノづくりと、高い技術への拘り。`
    },
    {
        name: `東京海上日動システムズ`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.tmn-systems.jp/sys_recruit/index.html`,
        salary: `680(500)`,
        employees: 1500,
        memo: `東京海上日動のIT戦略を1社で担う。世界最大級の保険システムを設計・運用。
2026年度初任給は29.3万(大卒)〜31.2万(院卒)へ改定。金融ITの中でもトップ級の待遇。
年収は30代前半で700〜850万、課長クラスで1,200万超がボリュームゾーン。
「人を大切にする」文化。有休20日、特別連続休暇など、休みやすさと高待遇を両立。`
    },
    {
        name: `電通総研`,
        industry: `ITサービス・SIer`,
        category: `DX・ITコンサルティング`,
        url: `https://www.dentsusoken.com/saiyo/`,
        salary: `1123(550)`,
        employees: 3500,
        memo: `電通グループのIT中核。2024年に電通総研へ社名変更し、シンクタンク機能も強化。
平均年収は1,100万超。新卒1年目想定年収は約550万〜。30歳前後で1,000万到達。
金融(銀行・証券)や製造(PLM/3D-CAD)領域に圧倒的強み。AI実装も国内リード。
「知的で個性的」な社員が多く、自由度とプロ意識が極めて高い。SIer界の最高峰。`
    },
    {
        name: `ニッセイ情報テクノロジー`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.nissay-it.co.jp/recruit/new/`,
        salary: `720(450)`,
        employees: 2500,
        memo: `日本生命グループ。保険・共済システムの国内最大手。外販比率が約5割と高い。
平均年収は約720万。30歳平均600万以上を公言。住宅手当や財形、退職金も充実。
2026年は「InsurTech(インシュアテック)」や、マイナンバー連携等の公共DXを加速。
平均勤続15年超。金融の安定性と、最新技術への投資を両立させた「堅実ホワイト」。`
    },
    {
        name: `日鉄ソリューションズ`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.nssol.nipponsteel.com/recruiting/`,
        salary: `906(500)`,
        employees: 7300,
        memo: `日本製鉄から分社。2026年度初任給は29万(大卒)〜30.7万(院卒)。業界トップ級。
平均年収は約906万。高度な数理・アルゴリズム技術(システム研究開発センター)に強み。
鉄鋼で培った「止まらないシステム」を作る信頼性が武器。DX、クラウドに強力シフト中。
ワークライフバランスと技術追求を両立。平均勤続13年、離職率が極めて低い優良企業。`
    },
    {
        name: `ニフティ`,
        industry: `通信・ネットワークインフラ`,
        category: `通信キャリア・ISP`,
        url: `https://recruit.nifty.co.jp/`,
        salary: `650(400)`,
        employees: 400,
        memo: `富士通発祥、現在はノジマグループ。老舗ISPとしての高い信頼性と機動力を併せ持つ。
新卒初任給は月25.5万〜(年400万想定)。平均年収は約650万だが、若手の昇給は速い。
通信サービスだけでなく、会員基盤を活かしたWebメディア、AI活用サービスを展開。
「自由闊達」な文化。新宿の最新オフィスを拠点とし、テレワークと出社を柔軟に選択。`
    },
    {
        name: `日本IBM`,
        industry: `ITサービス・SIer`,
        category: `DX・ITコンサルティング`,
        url: `https://www.ibm.com/jp-ja/careers/programs/shinsotsu`,
        salary: `911(560)`,
        employees: 15000,
        memo: `「watsonx」を核にAIとクラウドで企業変革をリード。コンサルとITの二本柱。
2026年度新卒(ITスペシャリスト/コンサル)は年俸560万前後〜。博士卒は800万以上の提示も。
日本国内の金融・公共インフラを支える強固な基盤と、量子計算等の最先端技術を併せ持つ。
「Think」が共通言語。社内学習プラットフォームが極めて充実しており、一生学び続けられる。`
    },
    {
        name: `日本総合研究所`,
        industry: `コンサルティング`,
        category: `シンクタンク・リサーチ`,
        url: `https://www.jri-career.com/internship.html`,
        salary: `980(500)`,
        employees: 2800,
        memo: `SMFGのIT戦略を担うシンクタンク。2026年度初任給は住宅手当込みで月33万〜。
30歳前後で年収1,000万に到達するシンクタンク特有の高年収。実力主義の評価体系。
金融システムの超大規模プロジェクトから、国家・社会課題に対する政策提言まで。
専門性が極めて高いプロ集団。多忙だが、充実した研修や福利厚生により若手の成長が速い。`
    },
    {
        name: `パーソルキャリア`,
        industry: `サービス`,
        category: `教育・HR・人材`,
        url: `https://www.persol-career.co.jp/recruit/newgraduate/`,
        salary: `680(450)`,
        employees: 5000,
        memo: `「はたらいて、笑おう。」転職サービス「doda」を展開する人材大手の核。
新卒初年度から年収450万想定。30代前半でマネージャー層へ昇進し1,000万超も可能。
2026年はAIによるマッチング高度化や、人的資本経営支援のコンサル領域を強化。
「ミッション・グレード制」を導入. 若手の抜擢が多く、圧倒的な当事者意識が身につく。`
    },
    {
        name: `日立システムズ`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.hitachi-systems.com/recruiting/`,
        salary: `666(450)`,
        employees: 12000,
        memo: `日立グループ最大級のSIer。2026年度初任給は25.4万(大卒)〜28.0万(院卒)に引き上げ。
平均年収は約666万。30歳前後で600万〜、課長クラスで1,000万に達する安定した体系。
24時間365日の運用保守体制に強み。公共、医療、製造の現場DX案件で高いシェア。
有休取得率が高く、男性育休も当たり前の「ホワイト日立」を代表する一社。`
    },
    {
        name: `丸紅I-DIGIO`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.marubeni-idigio.com/recruit/`,
        salary: `720(430)`,
        employees: 1000,
        memo: `丸紅グループのIT戦略中核。2024年にグループ統合を経て現社名へ。
平均年収は約720万。新卒は大卒月26万〜。丸紅グループ準拠の手厚い福利厚生が魅力。
商社のグローバル案件や、AIを活用した先端的な分析プロジェクトに携わることが可能。
テレワークやフレックス制が定着しており、多様なキャリアパスを支援するホワイトな環境。`
    },
    {
        name: `みずほリサーチ＆テクノロジーズ`,
        industry: `コンサルティング`,
        category: `シンクタンク・リサーチ`,
        url: `https://www.mizuho-rt.co.jp/recruit/new/index.html`,
        salary: `940(500)`,
        employees: 4500,
        memo: `みずほFGの知の拠点。コンサル、IT、シンクタンクの3機能が融合。
2026年度初任給は30万(大卒)〜32.2万(院卒)へ大幅増。金融IT最高水準の待遇。
メガバンクの巨大基盤を支えつつ、脱炭素やデジタル通貨等の最先端テーマをリード。
「人を育てる」文化。研修や海外派遣制度が非常に充実。安定と成長のバランスが良い。`
    },
    {
        name: `三菱UFJインフォメーションテクノロジー`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.it.mufg.jp/recruiting/fresh/`,
        salary: `750(450)`,
        employees: 2500,
        memo: `MUFGのIT中核。世界規模の金融インフラを設計・開発。2026年度初任給は28万(大卒)〜。
30代前半で年収800万超。福利厚生や住宅補助が非常に手厚く、実年収以上の豊かさ。
「止まることが許されない」金融システムの極致。近年は内製開発やAI活用を加速。
平均勤続15年超。金融の安定感と、最新のフィンテック領域での挑戦が共存する環境。`
    },
    {
        name: `三菱重工業`,
        industry: `メーカー`,
        category: `自動車・モビリティ・重工業`,
        url: `https://www.mhi.com/jp/recruit/shinsotsu/`,
        salary: `935(480)`,
        employees: 77000,
        memo: `日本最大の重工業。H3ロケット成功、防衛増産、水素インフラ等で業績絶好調。
2026年度初任給は27万(大卒)〜29万(修士)。30代前半で750〜900万、管理職で1,200万超。
「社会を、地球を、動かす。」 国家プロジェクトの最前線。圧倒的な技術力とスケール感。
三菱グループの結束力と安定感。近年は脱炭素(GX)関連のIT投資も過去最大規模。`
    },
    {
        name: `村田製作所`,
        industry: `メーカー`,
        category: `産業用ロボット・FA`,
        url: `https://recruit.murata.com/ja-jp/freshers/`,
        salary: `964(450)`,
        employees: 77000,
        memo: `電子部品で世界首位。独自素材・工程・設備の垂直統合で圧倒的な利益率を誇る。
平均年収964万。電子部品業界トップ。2026年度初任給は26万(大卒)〜29万(院卒)へ改定。
スマホ、EV、AIデータセンター向けコンデンサ等、世界の電子機器の心臓部を供給。
京都に拠点を置く「優良ホワイト」の代表格。独身寮や福利厚生が非常に充実している。`
    },
    {
        name: `モノタロウ`,
        industry: `Web・ネットサービス`,
        category: `Webプラットフォーム・EC`,
        url: `https://recruit.monotaro.com/new/`,
        salary: `706(450)`,
        employees: 700,
        memo: `「資材調達を、もっと簡単に。」製造業・建設業向けEC。AIとデータ分析が武器。
平均年収706万。新卒想定年収450万〜。データサイエンティスト枠は最高水準の待遇。
年間2000万点超の出品と、独自アルゴリズムによる物流最適化で急成長を維持。
「科学的な意思決定」を徹底. 大阪・梅田の最新オフィスで、合理的かつ自由な社風。`
    },
    {
        name: `大和総研`,
        industry: `コンサルティング`,
        category: `シンクタンク・リサーチ`,
        url: `https://www.dir.co.jp/recruit/information/newgraduate.html`,
        salary: `988(500)`,
        employees: 2200,
        memo: `大和証券グループ。リサーチ、コンサル、システムを統合した知のプロフェッショナル。
2026年度初任給は住宅手当込みで月33.6万〜。30代前半で1,000万超も珍しくない。
証券システムの最上流工程から、マクロ経済の分析、企業の経営戦略まで。
専門性を武器に、誇りを持って働ける環境。WLBへの配慮も高く「隠れ優良」として名高い。`
    },
    {
        name: `ラクス`,
        industry: `Web・ネットサービス`,
        category: `SaaS・業務効率化`,
        url: `https://fresh-recruit.rakus.co.jp/`,
        salary: `648(450)`,
        employees: 2500,
        memo: `「楽楽精算」等、国内シェア首位のSaaSを多数展開。10期以上連続20%増収。
平均年収は約648万。新卒想定年収は約450万〜。30代後半から役職で大幅昇給。
利益率の高いストックビジネスが強み。2026年度はAIによる自動仕訳機能を強化中。
「リーダーを、つくる。」。若手の育成に力を入れており、成果とプロセスの両方を評価。`
    },
    {
        name: `両備システムズ`,
        industry: `ITサービス・SIer`,
        category: `SIer（システム開発・運用）`,
        url: `https://www.ryobi.co.jp/recruit/`,
        salary: `650(410)`,
        employees: 1500,
        memo: `岡山県を拠点とする、中四国最大級の独立系SIer。全国の自治体DXに強み。
平均年収は約650万。新卒は大卒月23万〜。岡山勤務の場合は生活コストが低く実質豊か。
LGWANを活用したセキュリティクラウド等、ニッチで高い技術力を保有。
「誠実・貢献」の社風。地方に根ざしながら、全国規模の大規模開発に携われる。`
    },
];