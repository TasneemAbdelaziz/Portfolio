import 'package:easy_localization/easy_localization.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:portfolio/src/localization/locale_keys.g.dart';
class LaunchUrlHelper {
  LaunchUrlHelper._();

  static Future<void> launchURL(String url) async {
    try {
      await launchUrl(Uri.parse(url));
    } catch (e) {
      throw '${tr(LocaleKeys.openUrlError)} $url';
    }
  }
}
