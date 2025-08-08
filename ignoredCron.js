const { db } = require("./db");
const Proposals = db.main_proposals;
const Op = db.Op;
const literal = db.literal;

const setOldProposalsToIgnored = async () => {
  await Proposals.update(
    {
      status_id: 4,
    },
    {
      where: {
        [Op.and]: [
          { status_id: 3 },
          {
            createdAt: {
              [Op.lt]: literal("CURDATE() - INTERVAL 3 DAY"),
            },
          },
        ],
      },
    }
  );
};

module.exports = { setOldProposalsToIgnored };
