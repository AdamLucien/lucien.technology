type MagicLinkEmailParams = {
  url: string;
  brandName: string;
  expiresInMinutes: number;
};

export const buildMagicLinkEmail = ({
  url,
  brandName,
  expiresInMinutes,
}: MagicLinkEmailParams) => {
  const subject = "Sign in to Lucien Portal";
  const text = [
    `Sign in to ${brandName}`,
    "",
    `Use this link to sign in: ${url}`,
    "",
    `This link expires in ${expiresInMinutes} minutes and can only be used once.`,
  ].join("\n");

  const html = `
    <div style="font-family: ui-sans-serif, system-ui; color: #0f172a;">
      <p>Sign in to ${brandName}</p>
      <p>
        <a
          href="${url}"
          style="display: inline-block; padding: 12px 20px; background: #111827; color: #ffffff; text-decoration: none; border-radius: 999px;"
        >
          Sign in to Lucien Portal
        </a>
      </p>
      <p style="font-size: 14px; color: #475569;">
        If the button does not work, copy and paste this link:
      </p>
      <p style="font-size: 14px;">
        <a href="${url}">${url}</a>
      </p>
      <p style="font-size: 12px; color: #64748b;">
        This link expires in ${expiresInMinutes} minutes and can only be used once.
      </p>
    </div>
  `;

  return { subject, text, html };
};
